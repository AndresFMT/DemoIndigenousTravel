import { SanityDocument } from '@sanity/client';
import { sanityPreviewTokenNext, sanityPreviewIdNext } from '../environment';

interface PreviewPaneProps extends SanityDocument {
  _type: string;
  _key?: string;
  slug?: {
    current: string;
  }
}


// Customize this function to show the correct URL based on the current document
export function getPreviewUrl(doc: PreviewPaneProps) {
  // check to see if window location is localhost or production
  // if localhost, return localhost:3000/api/draft?secret=${222}&slug=${doc.slug.current}
  // if production, return window.location.host
  const isOperator = doc?._type === 'operator';
  const isHome = doc?._type === 'homepage' ? true: false;
  const slug = isOperator ?  `operators/${doc?.slug?.current}`:doc?.slug?.current;


  return (window.location.hostname === 'localhost')
    ? `http://localhost:3000/api/draft?secret=${sanityPreviewTokenNext}&slug=${slug}&home=${isHome}`
    : `https://indigenous-travel-manitoba-${sanityPreviewIdNext}-indigenous-travel-manitoba.vercel.app/api/draft?secret=${sanityPreviewTokenNext}&slug=${slug}&home=${isHome}`;
}

