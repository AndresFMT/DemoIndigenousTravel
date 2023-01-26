import { memo } from 'react';

import NextLink from 'next/link';

import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import { IndigenousTourismLogo } from 'src/assets'

function Logo({ onDark = false, isSimple = false, sx}) {

  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const PRIMARY_MAIN = theme.palette.primary.main;
  const LIGHT_COLOR = theme.palette.common.white;
  const DARK_COLOR = theme.palette.grey[800];

  return (
    <NextLink href="/" passHref>
      <Box
        sx={{
          width: isSimple ? 75: 140,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {isSimple ? (
          <IndigenousTourismLogo/>
        ) : (
          <IndigenousTourismLogo withText={true} isWhite={!isLight}/>
        )}
      </Box>
    </NextLink>
  );

}

export default Logo;
