import { Box } from '@mui/system';

import { SanityEnrichedImageObject, SanityColorProps } from 'src/@types/sanity';
import SanityImage from 'src/core/components/SanityImage';

type Props = {
  image?: SanityEnrichedImageObject;
};

const getBackgroundColor = (color?: SanityColorProps ) => {
  if (color == undefined) {
    return 'rgba(0,0,0,0.0)';
  }
  return `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
}

const ImageBackground = (props: Props) => {
  const { image } = props;
  if (image == undefined) {
    return null;
  }

  const backgroundColor = getBackgroundColor(image?.imageOverlay);

  return (
    <Box sx={{ position: 'absolute', height: '100%', width: '100%', zIndex: '-1' }}>
      <Box sx={{ position: 'absolute', height: '100%', width: '100%', zIndex: 1, backgroundColor: backgroundColor }} />
      {image.asset && <SanityImage image={image} fullWidth/>}
    </Box>
  );
}

export default ImageBackground;
