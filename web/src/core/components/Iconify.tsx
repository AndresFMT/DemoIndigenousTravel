import PropTypes from 'prop-types';
// icons
import { Icon, IconifyIcon } from '@iconify/react';
// @mui
import { Box, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  sx: PropTypes.object,
};

type Props = {
  icon: IconifyIcon;
  sx?: SxProps;
};

export default function Iconify({ icon, sx, ...other }:Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
