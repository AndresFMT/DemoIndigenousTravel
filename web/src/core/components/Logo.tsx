import NextLink from 'next/link';

import { SxProps, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import { IndigenousTourismLogo } from 'src/assets'

type Props = {
  isSimple?: boolean;
  isScrolling?: boolean;
  textColor?: string;
  sx?: SxProps;
};

function Logo({  isSimple = false, isScrolling, textColor, sx}: Props) {

  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <NextLink href="/" passHref>
      <Box
        sx={{
          width: isScrolling ? 120: 200,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          transition: 'width 0.3s ease-in-out',
          ...sx,
        }}
      >
        {isSimple ? (
          <IndigenousTourismLogo/>
        ) : (
          <IndigenousTourismLogo withText={true} isWhite={!isLight} textColor={textColor}/>
        )}
      </Box>
    </NextLink>
  );

}

export default Logo;
