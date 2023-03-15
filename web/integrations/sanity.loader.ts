
type Props = {
  src: string
  width: number
  quality?: number
}

export default function myImageLoader({ src, width, quality }:Props) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

