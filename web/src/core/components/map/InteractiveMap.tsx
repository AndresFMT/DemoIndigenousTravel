import { m } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {  Stack,  Typography, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// not actually unstable but it breaks the original Grid if you are replacing it
import MarkerClusterGroup from 'react-leaflet-cluster'
import { MarkerLayer } from 'react-leaflet-marker';
import { MapContainer, TileLayer, CircleMarker, Marker, ZoomControl, useMap } from 'react-leaflet'

import { LatLngExpression, Icon, LatLngTuple } from 'leaflet';

import { Scrollbar } from 'src/core/components';
import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';
import MapModal from './MapModal';
import { Operator } from 'src/@types/sanity';
import ListImage from './ListImage';

type OperatorListProps = {
  operators: Operator[];
  selectedOperator?: Number;
  onItemClick: (index: Number) => void;
}

const StyledListContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.burgundy,
  paddingTop: theme.spacing(3),
  position: 'relative',
  height: '100%',
  flex: '1 1 0',
  zIndex: 10,
}));

const StyledListTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: theme.palette.primary.burgundy,
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const OperatorList = ({ operators, onItemClick, selectedOperator }: OperatorListProps) => {

  return (
    <StyledListContainer>
      <StyledListTitle variant='h3'>Operators</StyledListTitle>
      <List sx={{  height: '100%', overflowY: 'scroll', msOverflowStyle:'none', scrollbarWidth:'none', '&::-webkit-scrollbar': {display: 'none'}}}>
        <Scrollbar >
        {
          operators.map((operator: Operator, index: Number) => {
            const key = `${operator.slug.current}-${index}`;
            const selected = selectedOperator === index;
            const primary = (<Typography variant='h5' component={'h5'} color={theme => theme.palette.primary.contrastText} >{operator.name}</Typography>);
            const secondary = `${operator.location}, MB`;
            console.log(operator);
            const selectedSecondary = (<>  {secondary} <br /> <Typography variant='body1'sx={{ fontWeight: 'normal'}} >{operator.shortDescription}</Typography></>);
            return (
              <ListItem
                key={key}
                disableGutters
                disablePadding
                sx={{
                  border: '1px solid',
                  borderColor: 'primary.main',
                }}
              >
                <ListItemButton
                  selected={selected}
                  component={m.div}
                  disableGutters
                  animate={{
                    height: selected ? '200px' : '100px'
                  }}
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'flex-end',
                    width: '100%',
                    paddingBottom: '0px',
                    overflow: 'hidden',
                  }}

                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick(index);
                  }}
                >
                  <ListItemText
                    primary={primary}
                    secondary={selected ? selectedSecondary : secondary}
                    secondaryTypographyProps={{
                      sx: {
                        color: theme => theme.palette.grey[100],
                        fontWeight: 'bold',
                        backgroundColor:'transparent',
                      }
                    }}
                    sx={{
                      paddingTop: theme => theme.spacing(2),
                      paddingBottom: theme => theme.spacing(2),
                      color: theme => theme.palette.grey[200],
                      fontWeight: 'bold',
                      height: 'fit-content',
                      paddingLeft: 2,
                    }}
                  />
                  <ListImage image={operator.images?.at(0)} selected={selected} />
                </ListItemButton>
              </ListItem>
            )
          })
        }
        </Scrollbar>
      </List>
    </StyledListContainer>
  )
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
          const pos = operator.slug.current;
          const key = `${pos.toString()}-${index}`;
          const center = [operator.coordinates.lat, operator.coordinates.lng] as LatLngTuple;
          return (
            <OperatorMarker
              key={key}
              center={center}
              content={operator.name}
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
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <OperatorMarkers operators={operators} selectedIndex={selectedOperator} />
          </MapContainer>
        </Grid>


      </InteractiveMapContainer>
    </MapModal>
  )
}

export default InteractiveMap;

