import { Operator } from 'src/@types/sanity';
import { LatLngTuple } from 'leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'

import OperatorMarker from './OperatorMarker';

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
    iconSize: L.point(75, 75, true),
  });

  return Icon;
}

export default OperatorMarkers;

