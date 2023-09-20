import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { useNextSanityImage } from 'next-sanity-image'
import createImageUrlBuilder from '@sanity/image-url'

import client from './sanity.client'
import { dataset, projectId } from './sanity.api'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto('format').fit('max')


export function urlFor(source:SanityImageSource) {
  const url = imageBuilder.image(source)
  return url
}

export function sanityImageProp(source:SanityImageSource) {
  const imageProps = useNextSanityImage(client, source)
  return imageProps
}


export default function sanityLoader({ src, width, quality=100 }:{src:string, width:number, quality?:number}) {
  let height;
  if ( width < 900 ) {
    height = Math.round(width * 16 / 9);
  } else if (width < 1200) {
    height = width;
  } else {
    height = Math.round(width * 9 / 16);
  }
  const url = new URL(src)
  url.searchParams.set('auto', 'format')
  url.searchParams.set('fit', 'crop')
  url.searchParams.set('crop', 'focalpoint')
  url.searchParams.set('w', width.toString())
  url.searchParams.set('h', height.toString())
  if (quality) {
    url.searchParams.set('q', quality.toString())
  }
  return url.href
}
