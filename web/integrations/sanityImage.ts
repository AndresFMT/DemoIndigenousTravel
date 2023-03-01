import client from './sanity.client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source:string) {
  const url = builder.image(source)
  return url
}

