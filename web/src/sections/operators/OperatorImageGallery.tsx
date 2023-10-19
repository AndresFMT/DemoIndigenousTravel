import { m } from 'framer-motion';
import { varTranHover } from 'src/core/components/animate';
import { urlFor } from 'integrations/sanity.image';
import { Box } from "@mui/material";

import { Image } from "src/core/components";
import Lightbox, { useLightbox } from "src/core/components/lightbox";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


type OperatorImageGalleryProps = {
  images: SanityImageSource[];
};

const OperatorImageGallery: React.FC<OperatorImageGalleryProps> = ({ images }) => {
  if (images.length === 0 || !images[0]) return null;
  const imageUrls = images.map(image => ({ src: urlFor(image).url() }))
  const initialUrls = images.map(image => ({ src: urlFor(image).width(400).url() }))
  const primaryImage = urlFor(images[0]).width(800).url();

  const lightbox = useLightbox(imageUrls);


  return (
    <>
      <Box
        sx={{
          gap: 1,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
          mb: { xs: 5, md: 10 },
        }}
      >
        <PhotoItem photo={primaryImage} onOpenLightbox={() => lightbox.onOpen(imageUrls[0]?.src || '')} />

        <Box
          sx={{
            gap: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {initialUrls.slice(1, 5).map((slide, index) => (
            <PhotoItem
              key={slide.src}
              photo={slide.src}
              onOpenLightbox={() => lightbox.onOpen(imageUrls[index+1]?.src || '')}
            />
          ))}
        </Box>

      </Box>
      <Lightbox
        index={lightbox.selected}
        slides={imageUrls}
        open={lightbox.open}
        close={lightbox.onClose}
      />

    </>
  );
}

export default OperatorImageGallery;

type PhotoItemProps = {
  photo: string;
  onOpenLightbox: VoidFunction;
};

function PhotoItem({ photo, onOpenLightbox }: PhotoItemProps) {
  return (
    <m.div
      whileHover="hover"
      variants={{
        hover: { opacity: 0.8 },
      }}
      transition={varTranHover()}
    >
      <Image
        alt="photo"
        src={photo}
        ratio="1/1"
        onClick={onOpenLightbox}
        sx={{ borderRadius: 2, cursor: 'pointer' }}
      />
    </m.div>
  );
}

