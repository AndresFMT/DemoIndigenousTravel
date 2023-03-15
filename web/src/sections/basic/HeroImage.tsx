import { Box } from '@mui/material';

import { SanityHeroImage } from 'src/core/components';

import { Section, ReducedContent } from 'src/@types/sanity';

const HeroImage: React.FC<Section> = ({ content, backgroundColor }) => {

  const reducedContent: ReducedContent = content.reduce((acc, cur) => {
    acc = { ...acc, ...cur };
    return acc;
  }, {} as ReducedContent);

  return (
      <Box
        component="div"
        sx={{
          position: 'relative',
          backgroundColor: backgroundColor,
        }}
      >
        {reducedContent.image ?
          <SanityHeroImage
            image={reducedContent.image}
          /> : null
        }

      </Box>

  )
}

export default HeroImage;
