import { Box } from '@mui/material';

import { SanityImage } from 'src/core/components';
import { urlFor } from 'integrations/sanityImage';

import { Section, ReducedContent } from 'src/@types/sanity';

const HeroImage: React.FC<Section> = ({ content, backgroundColor }) => {

  const reducedContent: ReducedContent = content.reduce((acc, cur) => {
    acc = { ...acc, ...cur };
    return acc;
  }, {} as ReducedContent);
  const image = reducedContent.image;
  const imageBuilder = image ? urlFor(image).auto('format').fit('max') : null;

  return (
    <div className="hero-image">
      <div className="hero-text">
        {/* Background */}
        <Box
          component="div"
          sx={{
            top: 0,
            left: 0,
            zIndex: 11,
            width: '100%',
            height: '100%',
            position: 'relative',
            backgroundColor: backgroundColor,
          }}
        >
          {imageBuilder ?
            <SanityImage
              imageBuilder={imageBuilder}
            /> : null
          }

        </Box>
      </div>
    </div>

  )
}

export default HeroImage;
