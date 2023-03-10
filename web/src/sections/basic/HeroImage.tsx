import { Box } from '@mui/material';

import { SanityImage } from 'src/core/components';

import { Section, ReducedContent } from 'src/@types/sanity';

const HeroImage: React.FC<Section> = ({ content, backgroundColor }) => {

  const reducedContent: ReducedContent = content.reduce((acc, cur) => {
    acc = { ...acc, ...cur };
    return acc;
  }, {} as ReducedContent);
  const image = reducedContent.image;

  return (
      <Box
        component="div"
        sx={{
          position: 'relative',
          backgroundColor: backgroundColor,
          maxHeight: '100vh',
        }}
      >
        {image ?
          <SanityImage
            image={image}
          /> : null
        }

      </Box>

  )
}

export default HeroImage;
