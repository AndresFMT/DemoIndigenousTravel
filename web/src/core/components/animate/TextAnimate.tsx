import { m, MotionProps } from 'framer-motion';
// @mui
import { Box, BoxProps } from '@mui/material';
//
import { varFade } from './variants';

// ----------------------------------------------------------------------


type IProps = BoxProps & MotionProps;

interface Props extends IProps {
  text: string;
  }

export default function TextAnimate({ text, variants, sx, ...other }:Props) {
  return (
    <Box
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (

        <m.span key={`${text}-${letter}${index}`} variants={variants || varFade().inUp}>
          {letter == " " ? '\u00A0' : letter}
        </m.span>
      ))
      }
    </Box>
  );
}
