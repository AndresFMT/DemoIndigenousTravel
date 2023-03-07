import { m } from 'framer-motion';
import { forwardRef, ReactNode} from 'react';
// @mui
import { Box, IconButton, SxProps, IconButtonProps} from '@mui/material';

// ----------------------------------------------------------------------
interface Props extends IconButtonProps {
  sxWrap?: SxProps;
  size?: 'small' | 'medium' | 'large';
}

const IconButtonAnimate = forwardRef<HTMLButtonElement,Props> (({ children, size = 'medium', sxWrap, ...other }, ref) => (
  <AnimateWrap size={size} sxWrap={sxWrap}>
    <IconButton size={size} ref={ref} {...other}>
      {children}
    </IconButton>
  </AnimateWrap>
));

export default IconButtonAnimate;

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

type AnimateWrapProps = {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  sxWrap?: SxProps;
};

function AnimateWrap({ size, children, sxWrap }: AnimateWrapProps ) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
        ...sxWrap,
      }}
    >
      {children}
    </Box>
  );
}
