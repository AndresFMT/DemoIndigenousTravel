import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// not actually unstable but it breaks the original Grid if you are replacing it
//
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

import { LatLngExpression } from 'leaflet';

import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';

import MapModal from './MapModal';
import OperatorList from './OperatorList';
import OperatorMarkers from './OperatorMarkers';



const InteractiveMapContainer = styled(Grid)(({ theme }) => ({
  zIndex: 0,
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  height: '90vh',
  width: '85vw',
  overflow: 'hidden',
}));

const CloseButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 11111,
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
}));

const InteractiveMap = () => {
  const { operators, setSelectedOperator, selectedOperator, closeMap } = useInteractiveMapContext();
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
      <InteractiveMapContainer container>
        <Grid xs={4} sx={{ height: '100%' }}>
          <OperatorList operators={operators} onItemClick={handleItemClick} selectedOperator={selectedOperator} />
        </Grid>
        <Grid xs={8}>
          <CloseButton onClick={handleCloseMapClick}>Close</CloseButton>
          <MapContainer center={position} zoom={6} style={{ height: '90vh', width: '100%', margin: 'auto' }} zoomControl={false} scrollWheelZoom={false}>
            <ZoomControl position="bottomright" />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"/>
            <OperatorMarkers operators={operators} selectedIndex={selectedOperator} />
          </MapContainer>
        </Grid>
      </InteractiveMapContainer>
    </MapModal>
  )
}

export default InteractiveMap;

