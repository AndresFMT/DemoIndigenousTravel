import groq from 'groq'

// used to get data for generated pages
export const groqPageQuery = groq`
    *[ _type == "page" &&
    !(_id in path('drafts.**')) &&
    slug.current == $slug][0]{
      title,
      description,
      sections[]->{
        ...,
        _type,
        heading,
        kicker,
        text,
        enableCTA,
        cta,
        videoUrl,
        richText,
        content[] -> {
          ...,
          image {
            ...,
            asset -> {
              ...,
              metadata
            }
          }
        },
        image {
          ...,
          asset -> {
            ...,
            metadata
          }
        }
      }
    }
    `
// used on /operator page
export const groqOperatorQuery = groq`
  *[ _type == "operator" &&
  !(_id in path('drafts.**')) &&
  slug.current == $slug][0]{
    name,
    slug,
    images[] {
      ...,
      asset -> {
        ...,
        metadata
      }
    },
    phoneNumber,
    email,
    website,
    location,
    address,
    category,
    region,
    description,
    _id,
  }
`;

// used on /operators page
export const groqOperatorsQuery = groq`
  *[ _type == "operator" &&
  !(_id in path('drafts.**'))]{
    name,
    slug,
    'image' : images[] {
      ...,
      asset -> {
        ...,
        metadata
      }
    }[0],
    phoneNumber,
    email,
    website,
    category,
    location,
    region,
    _id,
  }
`;

export const groqOperatorSlugsQuery = groq`
  *[ _type == "operator" &&
  !(_id in path('drafts.**'))]{
    slug
  }
`;


// used to generate pages
export const groqPageSlugsQuery = groq`
  *[ _type == "page" &&
  !(_id in path('drafts.**'))]{
    slug
  }
`;
