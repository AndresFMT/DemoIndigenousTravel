import { useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container,  Typography, List, ListItem, ListItemButton,  ListItemText, Button} from '@mui/material';
import MarkerClusterGroup from 'react-leaflet-cluster'
import { MarkerLayer } from 'react-leaflet-marker';
import { MapContainer, TileLayer, CircleMarker, Marker, ZoomControl, useMap } from 'react-leaflet'

import { LatLngExpression, Icon, LatLngTuple} from 'leaflet';

import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';
import MapModal from './MapModal';

type OperatorListProps = {
  operators: LatLngExpression[];
  onItemClick: (index: Number) => void;
}

const OperatorList = ({ operators, onItemClick }: OperatorListProps) => {
  return (
    <Box sx={{ height: '90vh', width: '30vw', margin: 'auto', overflowY: 'scroll' }}>
      <Typography variant='h3'>Operators</Typography>
      <List>
        {
          operators.map((pos: LatLngExpression, index: Number) => {
            return (
              <ListItem
                key={`${pos.toString()}-${index}`}
              >
                <ListItemButton
                  component={'div'}
                  onClick={(e) => {
                    console.log('clicked')
                    e.preventDefault();
                    onItemClick(index);
                  }}
                >
                  <ListItemText primary={`${pos.toString()}`} />
                </ListItemButton>
              </ListItem>
            )
          })
        }
      </List>
    </Box>
  )
}


type Operator = {
  title: string;
  position: LatLngExpression;
}

type OperatorMarkersProps = {
  operators: Array<Operator>;
  selectedIndex: Number;
}



const OperatorMarkers = ({ operators, selectedIndex }: OperatorMarkersProps) => {
  return (
    <>
      {
        operators.map((operator: Operator, index: Number) => {
          const pos = operator.position;
          return (
            <OperatorMarker
              key={`${pos.toString()}-${index}`}
              center={pos}
              content={operator.title}
              openPopup={selectedIndex === index}
            />
          )
        })
      }
    </>
  )
}

type OperatorMarkerProps = {
  center: LatLngExpression;
  content: string;
  openPopup: boolean;
}

const OperatorMarker = ({ center, content, openPopup }: OperatorMarkerProps) => {
  const map = useMap();
  const markerRef = useRef(null);

  useEffect(() => {
    if (openPopup && markerRef.current != null && map) {
      map.flyTo(center, 10);
      // markerRef.current.openPopup();
    }
  }, [map, center, openPopup]);

  return (
    <Marker ref={markerRef} position={center} icon={PointerIcon}>
      {content}
      <CircleMarker center={center} radius={5} stroke={false} color={'#f1f1f1'} fillColor={'#f1f2f2'} />
    </Marker>
  );
}

const PointerIcon = new Icon({
  iconUrl: '/hoop.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],

});

const InteractiveMapContainer = styled(Container)(({ theme }) => ({
  zIndex: 1,
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const CloseButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 1,
}));

const InteractiveMap = () => {
  const { operators, setSelectedOperator, selectedOperator, closeMap} = useInteractiveMapContext();
  const position: LatLngExpression = [54.164, -97.068];

  const handleItemClick = (index: Number) => {
    setSelectedOperator(index);
  }

  const handleCloseMapClick = () => {
    setSelectedOperator(undefined);
    closeMap();
  }

  return (
    <MapModal>
      <InteractiveMapContainer maxWidth="xl" >
        <CloseButton onClick={handleCloseMapClick}>Close</CloseButton>

        <OperatorList operators={operators} onItemClick={handleItemClick} />

        <MapContainer center={position} zoom={6} style={{ height: '80vh', width: '70%', margin: 'auto' }} zoomControl={false} scrollWheelZoom={false}>
          <ZoomControl position="bottomright" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <OperatorMarkers operators={operators} selectedIndex={selectedOperator} />
        </MapContainer>
      </InteractiveMapContainer>
    </MapModal>
  )
}

export default InteractiveMap;

