import { SanityColorProps } from "src/@types/sanity";

export const getBackgroundLuminance = (color?: SanityColorProps) => {
  if (color == undefined) {
    return 1;
  }
  return (0.299 * color.rgb.r + 0.587 * color.rgb.g + 0.114 * color.rgb.b) / 255;
}
