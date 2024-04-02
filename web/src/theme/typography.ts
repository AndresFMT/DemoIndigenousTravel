import { pxToRem, responsiveFontSizes } from 'src/utils/getFontValue';

// ----------------------------------------------------------------------
export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'button'
  | 'overline';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    body3: true;
  }
}

const FONT_PRIMARY = 'Nunito Sans, sans-serif';
const FONT_SECONDARY = 'Ubuntu, sans-serif';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightSemiBold: 600,
  h1: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 42, md: 48, lg: 54 }),
  },
  h2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 500,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 28 / 16,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 26 / 14,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 })
  },
  subtitle3: {
    fontWeight: 600,
    lineHeight: 24 / 13,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 })
  },
  body1: {
    fontWeight: 'inherit',
    lineHeight: 28 / 16,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 'inherit',
    lineHeight: 26 / 14,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 })
  },
  body3: {
    fontWeight: 'inherit',
    lineHeight: 24 / 13,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 })
  },
  caption: {
    lineHeight: 20 / 12,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 600,
    lineHeight: 20 / 12,
    fontSize: pxToRem(16),
    textTransform: 'uppercase',
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 })
  },
  button: {
    fontWeight: 600,
    lineHeight: 24 / 14,
    fontSize: pxToRem(16),
    textTransform: 'capitalize',
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 })
  },
} as const;

export default typography;
