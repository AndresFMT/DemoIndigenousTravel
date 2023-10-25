import { alpha } from '@mui/material/styles';
// utils
import createGradient from 'src/utils/createGradient';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

interface GradientsPaletteOptions {
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
    dark: string;
    light: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    burgundy?: string;
    green?: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    background: TypeBackground;
    footer: {
      background: string;
      text: string;
    };
  }

  interface TypeText {
    footer: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    footer: {
      background: string;
      text: string;
    };
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// SETUP COLORS

export const contrastText = {
  white: '#FFFFFF',
  black: '#212B36',
};

const PRIMARY = {
  yellow: '#e0ac0f',
  green: '#605e43',
  burgundy: '#610000',
  tan: '#ab9f89',
  lighter: '#FEE9D1',
  light: '#FDAB76',
  main: '#E0AC0F',
  dark: '#B3200E',
  darker: '#770508',
  contrastText: contrastText.white,
  text: contrastText.black,
};
const SECONDARY = {
  blue: '#456d90',
  darkBrown: '#321d00',
  brown: '#503b11',
  orange: '#da5225',
  lighter: '#D2FCF4',
  light: '#77F0ED',
  main: '#da5225',
  dark: '#116E95',
  darker: '#063963',
  contrastText: contrastText.white,
};
const INFO = {
  lighter: '#CBFEFC',
  light: '#63E8F9',
  main: '#00B1ED',
  dark: '#0067AA',
  darker: '#003471',
  contrastText: contrastText.white,
};
const SUCCESS = {
  lighter: '#CDFCD1',
  light: '#69F290',
  main: '#0CD66E',
  dark: '#069A6B',
  darker: '#02665B',
  contrastText: contrastText.black,
};
const WARNING = {
  lighter: '#FFF8D1',
  light: '#FFE475',
  main: '#FFC81A',
  dark: '#B7860D',
  darker: '#7A5204',
  contrastText: contrastText.black,
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: contrastText.white,
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  secondary: createGradient(SECONDARY.light, SECONDARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_12],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light' as const,
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500], footer: {primary: GREY[200],secondary: GREY[100]}},
    background: { paper: '#fff', default: '#fff', neutral: GREY[100], footer: '#000', dark: '#000000aa'},
    action: { active: GREY[600], ...COMMON.action },
    footer: { background: '#000', text: GREY[600] },
  },
  dark: {
    ...COMMON,
    mode: 'dark' as const,
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] , footer: {primary: GREY[600], secondary: GREY[500]}},
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_12], footer: '#fff', dark: '#000000aa'},
    action: { active: GREY[500], ...COMMON.action },
    footer: { background: '#fff', text: GREY[600] },
  },
};

export default palette;
