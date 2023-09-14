import { Marker, MarkerLayer } from 'react-leaflet-marker';
import Hoop from 'src/core/components/Hoop';

import { useMap, useMapEvent } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';

type MapMarkerProps = {
  position: LatLngExpression;
};

const MapMarker = ({ position }: MapMarkerProps) => {

  const map = useMap();
  return (
        <MarkerLayer>
    <Marker
      placement="center"
      position={position}
      riseOffset={400}
      size={[50, 50]}
      zIndexOffset={88888}>
      <Hoop size={50} />
    </Marker>
        </MarkerLayer>

  );
};

export default MapMarker;
