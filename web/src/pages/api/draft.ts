import type { NextApiRequest, NextApiResponse } from 'next'
import client from 'integrations/sanity.client'


const getPostBySlug = async (slug: string) => {
  // Fetch the headless CMS to check if the provided `slug` exists
  const data = await client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
  return data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = process.env.SANITY_PREVIEW_TOKEN_NEXT;
  if (req.query.secret !== token || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token', token  })
  }
  console.log('hitting preview');

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const post = await getPostBySlug(req.query.slug)

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post || !post.slug || !post.slug.current) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Draft Mode by setting the cookie
  res.setDraftMode({ enable: true })

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(`/${post.slug.current}`)
}
