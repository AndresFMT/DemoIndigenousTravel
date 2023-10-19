import { useRef, useEffect } from 'react';
import { LatLngExpression, DivIcon, Icon } from 'leaflet';
import { Marker, useMap, Popup } from 'react-leaflet'

import { styled } from '@mui/material/styles';
import { urlFor } from 'integrations/sanity.image';

import { Image } from 'src/core/components'

import { Operator } from 'src/@types/sanity';

type OperatorMarkerProps = {
  center: LatLngExpression;
  content: Operator;
  openPopup: boolean;
  children?: React.ReactNode;
}

const PopupContainer = styled(Popup)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[3],
  translate: 'transform(-700%, 100%)',
  opacity: '0 !important',
  position: 'relative',

  '& .leaflet-popup-content-wrapper': {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[3],
    translate: 'transform(-1000%, -10%)',
  },
  '& .leaflet-popup-content': {
    padding: theme.spacing(1),
    '& h3': {
      marginBottom: theme.spacing(1),
    },
    '& p': {
      marginBottom: theme.spacing(1),
    },
  },
  '& .leaflet-popup-tip-container': {
    '& .leaflet-popup-tip': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[3],
    },
  },
}));

const OperatorMarker = ({ center, content, openPopup }: OperatorMarkerProps) => {
  const map = useMap();
  const markerRef = useRef(null);
  const { name, shortDescription, slug }  = content;

  const imgUrl = urlFor(content.image).width(180).height(180).url();
  useEffect(() => {
    if (openPopup && markerRef.current != null && map) {
      map.flyTo(center, 15);
      if (markerRef.current != null) {
        map.openPopup(markerRef.current);
      }
    }
  }, [map, center, openPopup]);

  return (
    <>
      <Marker
        position={center}
        icon={PointerIcon}>
        <Popup
          className="popup-container"
          ref={markerRef}
          content={createMarker(imgUrl, name, shortDescription, slug.current)}
        >
        </Popup>
      </Marker>
    </>
  );
}


// This might fare better as a div overlay. Popup seems to add a lot of overhead. If I can add a div overlay to this component and throw it into the same layer then it might be a lot cleaner of a solution.

const [markerSizeX, markerSizeY] = [150, 150];

const anchorX = markerSizeX / 2;
const anchorY = markerSizeY;

const popupAnchorX = (markerSizeX/ 2 + 20 )*.35;
const popupAnchorY = (markerSizeY + 13)/ 3.6;

const createMarker = (img:string, name:string, shortDescription:string|undefined, url: string) => {
  const container = document.createElement('div');
  container.className = 'marker-container';
  container.setAttribute('style',`--size:${markerSizeX}px;width:var(--size);height:var(--size);`);
  const image = document.createElement('img');
  image.className = 'marker-image';
  image.src = img;
  image.setAttribute('style',`--size:${markerSizeX*0.6}px;`);
  container.appendChild(image);

  const popup = document.createElement('div');
  popup.className = 'popup MuiListItemText-root MuiListItemText-multiline';
  container.appendChild(popup);
  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';
  popup.appendChild(popupContent);
  const popupTitle = document.createElement('h3');
  popupTitle.className = 'popup-title';
  popupTitle.innerHTML = name;
  popupContent.appendChild(popupTitle);
  const popupDescription = document.createElement('p');
  popupDescription.className = 'popup-description';
  popupDescription.innerHTML = shortDescription || '';
  popupContent.appendChild(popupDescription);
  const popupLink = document.createElement('a');
  popupLink.className = 'popup-link';
  popupLink.href = `/operators/${url}`;
  popupLink.innerHTML = 'Read More';
  popupContent.appendChild(popupLink);

  return container;
}


const PointerIcon = new Icon({
  className: 'pointer-icon',
  bgPos: [0, 0],
  iconUrl: '/hoop-marker.png',
  iconSize: [markerSizeX, markerSizeY],
  iconAnchor: [anchorX, anchorY],
  popupAnchor: [popupAnchorX, popupAnchorY],
  shadowUrl: '/hoop-marker-shadow.png',
  shadowSize: [markerSizeX, markerSizeY],
  shadowAnchor: [anchorX-20, anchorY],

});

export default OperatorMarker;

