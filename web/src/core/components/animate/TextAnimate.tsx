import { m, MotionProps } from 'framer-motion';
// @mui
import { Box, BoxProps } from '@mui/material';
//
import { varFade } from './variants';

import { useResponsive } from 'src/hooks';
// ----------------------------------------------------------------------


type IProps = BoxProps & MotionProps;

interface Props extends IProps {
  text: string;
  }

export default function TextAnimate({ text, variants, sx, ...other }:Props) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (

        <>
          <m.span key={`${text}-${letter}${index}`} variants={variants || varFade().inUp} >
            {letter == " " ? '\u00A0' : letter}
          </m.span>
          {!isDesktop && (letter == " " ? <br/> : null)}
        </>
      ))
      }
    </Box>
  );
}
