import { useRef, useEffect } from 'react';
import { LatLngExpression, Icon, LeafletMouseEvent } from 'leaflet';
import { Marker, useMap, Popup } from 'react-leaflet'

import { urlFor } from 'integrations/sanity.image';
import { Operator } from 'src/@types/sanity';
import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';

type OperatorMarkerProps = {
  center: LatLngExpression;
  content: Operator;
  openPopup: boolean;
  children?: React.ReactNode;
}

const OperatorMarker = ({ center, content, openPopup }: OperatorMarkerProps) => {
  const { setSelectedOperator } = useInteractiveMapContext();

  const map = useMap();
  const markerRef = useRef<any>(null);
  const popupRef = useRef(null);
  const { name, shortDescription, slug } = content;
  const imgUrl = urlFor(content.image).width(180).height(180).url();

  useEffect(() => {
    if (markerRef.current != null && map != null) {
      if (openPopup) {

        map.closePopup();
        map.flyTo(center, 15);
        map.on('moveend', () => {
          if (popupRef.current != null && markerRef.current._popup != null) {
            map.openPopup(popupRef.current);
          }
          map.off('moveend');
        });

      }
    }
  }, [map, center, openPopup]);

  return (
    <>
      <Marker
        position={center}
        ref={markerRef}
        riseOnHover={true}
        eventHandlers={{
          click: (e: LeafletMouseEvent) => {
            if (markerRef.current != null &&
              e.target === markerRef.current &&
              map != null) {
              setSelectedOperator(content.name)
            }
          },
        }}
        icon={PointerIcon}>
        <Popup
          className="popup-container"
          ref={popupRef}
          content={createMarker(imgUrl, name, shortDescription, slug.current)}
        >
        </Popup>
      </Marker>
    </>
  );
}


// This might fare better as a div overlay. Popup seems to add a lot of overhead. If I can add a div overlay to this component and throw it into the same layer then it might be a lot cleaner of a solution.

const [markerSizeX, markerSizeY] = [100, 100];

const anchorX = markerSizeX / 2;
const anchorY = markerSizeY;

const popupAnchorX = (markerSizeX / 2 + 20) * .34;
const popupAnchorY = (markerSizeY + 13) * .34;

const createMarker = (img: string, name: string, shortDescription: string | undefined, url: string) => {
  const container = document.createElement('div');
  container.className = 'marker-container';
  container.setAttribute('style', `--size:${markerSizeX}px;width:var(--size);height:var(--size);`);
  const image = document.createElement('img');
  image.className = 'marker-image';
  image.src = img;
  image.setAttribute('style', `--size:${markerSizeX * 0.6}px;`);
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
  shadowAnchor: [anchorX - 20, anchorY],

});

export default OperatorMarker;

