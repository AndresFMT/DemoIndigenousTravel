import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Box } from '@mui/material';

import { SanityImage } from 'src/core/components';
import { urlFor } from 'integrations/sanityImage';

type Props = {
  image: SanityImageSource;
};

const HeroImage: React.FC<Props> = ({image}) => {

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
