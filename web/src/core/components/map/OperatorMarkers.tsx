import { useRef, useEffect } from 'react';

import { Operator } from 'src/@types/sanity';
import { LatLngExpression, Icon, LatLngTuple} from 'leaflet';
import { Marker, useMap, Popup } from 'react-leaflet'
import L  from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'


type OperatorMarkersProps = {
  operators: Array<Operator>;
  selectedIndex: Number;
}

const OperatorMarkers = ({ operators, selectedIndex }: OperatorMarkersProps) => {
  return (
    <MarkerClusterGroup
      iconCreateFunction={createClusterIcon}
      maxClusterRadius={75}
    >
      <>
        {
          operators.map((operator: Operator, index: Number) => {
            const pos = operator.slug.current;
            const key = `${pos.toString()}-${index}`;
            const center = [operator.coordinates.lat, operator.coordinates.lng] as LatLngTuple;
            return (
              <OperatorMarker
                key={key}
                center={center}
                content={operator}
                openPopup={selectedIndex === index}
              />
            )
          })
        }
      </>
    </MarkerClusterGroup>
  )
}

const createClusterIcon = function(cluster: any) {
    const Icon = L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'customClusterMarker',
      iconSize: L.point(75,75, true),
    });

    return Icon;
}

type OperatorMarkerProps = {
  center: LatLngExpression;
  content: Operator;
  openPopup: boolean;
  children?: React.ReactNode;
}


const OperatorMarker = ({ center, content, openPopup, children }: OperatorMarkerProps) => {
  const map = useMap();
  const markerRef = useRef(null);
  const { name, description } = content;

  useEffect(() => {
    if (openPopup && markerRef.current != null && map) {
      map.flyTo(center, 15);
      // markerRef.current.openPopup();
    }
  }, [map, center, openPopup]);

  return (
    <>
      <Marker
        ref={markerRef}
        position={center}
        icon={PointerIcon}>
        <Popup>
          {content.name}
        </Popup>
      </Marker>
    </>
  );
}

const PointerIcon = new Icon({
  iconUrl: '/hoop-marker.png',
  iconSize: [100, 100],
  iconAnchor: [50, 100],
  popupAnchor: [0, -50],

});

export default OperatorMarkers;

