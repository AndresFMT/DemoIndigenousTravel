import { useState, useContext, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import MarkerClusterGroup from 'react-leaflet-cluster'
import { MarkerLayer} from 'react-leaflet-marker';
import { MapContainer, TileLayer, CircleMarker, Marker, ZoomControl, useMap} from 'react-leaflet'

import { LatLngExpression, LatLng, Icon} from 'leaflet';

// import Hoop from 'src/core/components/Hoop';


import { InteractiveMapContext } from 'src/contexts/InteractiveMapContext';

// import MapMarker from './Marker';

type OperatorListProps = {
  operators: LatLngExpression[];
  onItemClick: (index:Number) => void;
}

const OperatorList = ({ operators, onItemClick }: OperatorMarkersProps) => {
  return (
    <Box sx={{ height: '90vh', width: '30vw', color: '#f1f1f1',  margin: 'auto', overflowY: 'scroll' }}>
      <Typography variant='h3'>Operators</Typography>
      <List>
        {
          operators.map((pos:LatLngExpression, index:Number) =>{
            return (
              <ListItem
                key={`${pos[0]}, ${pos[1]}-${index}`}
              >
                <ListItemButton
                  component={'div'}
                  onClick={(e) =>{
                    console.log('clicked')
                    e.preventDefault();
                    onItemClick(index);
                  }}
                  >
                  <ListItemText primary={`${pos[0]}, ${pos[1]}`} />
                </ListItemButton>
              </ListItem>
            )})
        }
      </List>
    </Box>
  )
}


const RootStyle = styled('section')(({ theme }) => ({
  position: 'absolute',
  height: '100vh',
  width: '100vw',
  top: 0,
  zIndex: 5555,
  background: theme.palette.grey[900],
  padding: theme.spacing(12, 0),
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

type OperatorMarkersProps = {
  operators: LatLngExpression[];
  selectedIndex: Number;
}

const OperatorMarkers = ({ operators, selectedIndex}: OperatorMarkersProps) => {
  return (
    <>
      {
        operators.map((pos:LatLngExpression, index:Number) =>{
        return (
          <OperatorMarker
            key={`${pos[0]}, ${pos[1]}-${index}`}
            center={pos}
            content={operators.title}
            openPopup={selectedIndex === index}
          >
          </OperatorMarker>
        )})
      }
    </>
  )
}

const OperatorMarker = ({ center, content, openPopup }) => {
  const map = useMap();
  const markerRef = useRef(null);

  useEffect( () => {
    if (openPopup) {
      map.flyToBounds([center], {maxZoom: 10});
      markerRef.current?.openPopup();
    }
  }, [map, center, openPopup]);

  return (
    <Marker ref={markerRef} position={center} icon={PointerIcon}>
      {content}
      <CircleMarker center={center} radius={5} stroke={false} color={'#f1f1f1'} fillColor={'#f1f2f2'}/>
    </Marker>
  );
}

const PointerIcon = new Icon({
  iconUrl: '/hoop.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],

});


const InteractiveMap = () => {
  const { operators, setSelectedOperator, selectedOperator} = useContext(InteractiveMapContext);
  const position: LatLngExpression = [54.164, -97.068];

  const handleItemClick = (index:Number) => {
    setSelectedOperator(index);
  }



  return (
    <RootStyle>
      <OperatorList operators={operators} onItemClick={handleItemClick}/>
      <MapContainer center={position} zoom={6} style={{ height: '90vh', width: '70vw', margin: 'auto' }} zoomControl={false} scrollWheelZoom={false}>
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <OperatorMarkers operators={operators} selectedIndex={selectedOperator}/>
      </MapContainer>
    </RootStyle>
  )
}

export default InteractiveMap;

