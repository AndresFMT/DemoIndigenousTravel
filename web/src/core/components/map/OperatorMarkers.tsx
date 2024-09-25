import React, { Suspense, useState, useCallback, useEffect } from 'react';
import { useMapEvents, MapContainer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import OperatorMarker from './OperatorMarker';
import { Operator } from 'src/@types/sanity';

type OperatorMarkersProps = {
  operators: Array<Operator>;
  selectedOperator: string;
};

const OperatorMarkers = ({ operators, selectedOperator }: OperatorMarkersProps) => {
  const [visibleOperators, setVisibleOperators] = useState<Operator[]>([]);

  const updateVisibleMarkers = useCallback((map: any) => {
    if (!map) return;
    const bounds = map.getBounds();
    const filteredOperators = operators.filter((operator) => {
      const { lat, lng } = operator.coordinates;
      return bounds.contains([lat, lng]);
    });

    setVisibleOperators((prevVisibleOperators) => {
      const prevIds = prevVisibleOperators.map((o) => o.slug.current);
      const newIds = filteredOperators.map((o) => o.slug.current);
      if (JSON.stringify(prevIds) !== JSON.stringify(newIds)) {
        return filteredOperators;
      }
      return prevVisibleOperators;
    });
  }, [operators]);

  const MapEventHandler = () => {
    const map = useMapEvents({
      moveend: () => updateVisibleMarkers(map),
      zoomend: () => updateVisibleMarkers(map),
    });

    useEffect(() => {
      updateVisibleMarkers(map); 
    }, [map, updateVisibleMarkers]);

    return null;
  };

  return (
    <Suspense fallback={<div>Loading markers...</div>}>
      <MarkerClusterGroup
        iconCreateFunction={createClusterIcon}
        maxClusterRadius={20} // Reduced radius for performance
        showCoverageOnHover={false}
        disableClusteringAtZoom={14}
        spiderfyOnMaxZoom={true}
      >
        {visibleOperators.map((operator: Operator, index: number) => {
          const { coordinates, slug, name } = operator;
          const key = `${slug.current}-${index}`;
          const center = [coordinates.lat, coordinates.lng] as LatLngTuple;

          return (
            <OperatorMarker
              key={key}
              center={center}
              content={operator}
              openPopup={selectedOperator === name}
            />
          );
        })}
      </MarkerClusterGroup>
      <MapEventHandler />
    </Suspense>
  );
};

const createClusterIcon = (cluster: any) => {
  const count = cluster.getChildCount();
  const size = count < 10 ? 40 : count < 50 ? 50 : 75;

  return L.divIcon({
    html: `<span>${count}</span>`,
    className: 'customClusterMarker',
    iconSize: L.point(size, size),
  });
};

export default OperatorMarkers;
