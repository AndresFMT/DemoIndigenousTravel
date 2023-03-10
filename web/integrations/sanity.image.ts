import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { useNextSanityImage } from 'next-sanity-image'
import createImageUrlBuilder from '@sanity/image-url'

import client from './sanity.client'
import { dataset, projectId } from 'integrations/sanity.api'

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
