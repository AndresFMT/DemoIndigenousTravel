import { cache } from 'react'
import client from 'integrations/sanity.client'
import 'server-only'

export const preload = () => {
  void getOperators()
}

export const getOperators = cache(async () => {
  const operators = await client.fetch(`
    *[_type == 'operator']{
      name,
      slug,
      images,
      phoneNumber,
      email,
      website,
      location,
      address,
      coordinates,
      region,
      _id
    }
  `)
  return operators
})

