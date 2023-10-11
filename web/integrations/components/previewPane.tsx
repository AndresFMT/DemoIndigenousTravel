import { SanityDocument } from 'sanity';
import { sanityPreviewTokenNext } from '../environment';

interface PreviewPaneProps extends SanityDocument {
  slug?: {
    current: string;
  }
}


// Customize this function to show the correct URL based on the current document
export function getPreviewUrl(doc: PreviewPaneProps) {
  // check to see if window location is localhost or production
  // if localhost, return localhost:3000/api/draft?secret=${222}&slug=${doc.slug.current}
  // if production, return window.location.host
  const slug = doc?.slug?.current;

  return (window.location.hostname === 'localhost')
    ? `http://localhost:3000/api/draft?secret=${sanityPreviewTokenNext}&slug=${slug}`
    : `https://indigenous-travel-manitoba-f32y6k95d-indigenous-travel-manitoba.vercel.app/api/draft?secret=${sanityPreviewTokenNext}&slug=${slug}`;
}

