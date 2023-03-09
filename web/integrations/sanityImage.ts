import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import client from './sanity.client'

import { useNextSanityImage } from 'next-sanity-image'

const builder = imageUrlBuilder(client)

export function urlFor(source:SanityImageSource) {
  const url = builder.image(source)
  return url
}

export function sanityImageProp(source:SanityImageSource) {
  const imageProps = useNextSanityImage(client, source)
  return imageProps
}
