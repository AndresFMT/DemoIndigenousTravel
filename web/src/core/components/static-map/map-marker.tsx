import { Marker} from 'react-leaflet';
import { Icon } from 'leaflet';

// ----------------------------------------------------------------------

type Props = {
  lat: number;
  lng: number;
  onOpen: VoidFunction;
};

export default function MapMarker({ onOpen, lat, lng }: Props) {

  return (
    <Marker
      position={[lat, lng]}
      icon={PointerIcon}
    >
    </Marker>
  );
}

const markerSizeX = 40;
const markerSizeY = 40;
const anchorX = markerSizeX / 2;
const anchorY = markerSizeY;
const popupAnchorX = 0;
const popupAnchorY = -markerSizeY;

const PointerIcon = new Icon({
  className: 'pointer-icon',
  bgPos: [0, 0],
  iconUrl: '/hoop-marker.png',
  iconSize: [markerSizeX, markerSizeY],
  iconAnchor: [anchorX, anchorY],
  popupAnchor: [popupAnchorX, popupAnchorY],
  shadowUrl: '/hoop-marker-shadow.png',
  shadowSize: [markerSizeX, markerSizeY],
  shadowAnchor: [anchorX - 5, anchorY],

});
