import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import client from './sanity.client'

const builder = imageUrlBuilder(client)

export function urlFor(source:SanityImageSource) {
  const url = builder.image(source)
  return url
}

