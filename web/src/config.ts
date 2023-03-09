// API
// ----------------------------------------------------------------------

import { SettingsValueProps } from "./@types/settings";

export const HOST_API = {
  dev: process.env.DEV_API,
  production: process.env.PRODUCTION_API,
};

export const GOOGLE_API = process.env.GOOGLE_API;

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER_MOBILE_HEIGHT = 92;
export const HEADER_DESKTOP_HEIGHT = 112;
export const DRAWER_WIDTH = 280;

// DEFAULT LOCALE
// ----------------------------------------------------------------------
// Also change in next.config.mjs

export const defaultLocale = 'en';

// SETTINGS
// ----------------------------------------------------------------------

export const defaultSettings = {
  // light | dark
  themeMode: 'light',
  // ltr | rtl
  themeDirection: 'ltr',
  //  default | blueOrange | greenOrange | purpleTeal | cyanYellow | pinkCyan
  themeColorPresets: 'default',
} as SettingsValueProps;

