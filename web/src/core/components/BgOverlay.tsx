import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, NoSsr, BoxProps } from '@mui/material';
// utils
import cssStyles from 'src/utils/cssStyles';

// ----------------------------------------------------------------------
interface BackgroundOverlayProps extends BoxProps {
  direction?: string;
  startColor?: string;
  endColor?: string;
}

const RootStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'direction' && prop !== 'startColor' && prop !== 'endColor',
})<BackgroundOverlayProps>(({ direction, startColor, endColor, theme }) => ({
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  ...cssStyles(theme).bgGradient({ direction, startColor, endColor }),
}));

// ----------------------------------------------------------------------

BgOverlay.propTypes = {
  direction: PropTypes.string,
  endColor: PropTypes.string,
  startColor: PropTypes.string,
};

export default function BgOverlay({ direction, startColor, endColor, ...other }: BackgroundOverlayProps ) {
  return (
    <NoSsr>
      <RootStyle direction={direction} startColor={startColor} endColor={endColor} {...other} />
    </NoSsr>
  );
}
