import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { useState, useCallback } from 'react';

import Box, { BoxProps } from '@mui/material/Box';


import MapPopup from './map-popup';
import { mapStyle } from './styles';
import MapMarker from './map-marker';
import { MapOfficeProps } from './types';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  offices: MapOfficeProps[];
}

export default function Map({ offices, sx, ...other }: Props) {
  const [tooltip, setTooltip] = useState<MapOfficeProps | any>(null);
  const [centerMap, setCenterMap] = useState({
    lat: 49.88531957670153,
    lng: -97.17762828465725,
  });

  const handleOpen = useCallback(
    (lat: number, lng: number, office: MapOfficeProps) => {
      setCenterMap({
        ...centerMap,
        lat: lat - 32,
        lng,
      });
      setTooltip(office);
    },
    [centerMap]
  );

  return (
    <Box sx={{ height: '100%', overflow: 'hidden', ...sx }} {...other}>
      <MapContainer center={centerMap} zoom={14} zoomControl={false} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        {offices.map((office, index) => (
          <MapMarker
            key={index}
            lat={office.lat}
            lng={office.lng}
            onOpen={() => handleOpen(office.lat, office.lng, office)}
          />
        ))}

        {tooltip && (
          <MapPopup
            lat={tooltip.latlng[0]}
            lng={tooltip.latlng[1]}
            office={tooltip}
            onClose={() => setTooltip(null)}
          />
        )}
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />
      </MapContainer>

    </Box>
  );
}
