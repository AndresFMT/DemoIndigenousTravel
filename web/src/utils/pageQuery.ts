import groq from 'groq'

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
export const groqOperatorQuery = groq`
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
    location,
    address,
    region,
    description,
    _id,
  }
`;

export const groqPageSlugsQuery = groq`
  *[ _type == "page" &&
  !(_id in path('drafts.**'))]{
    slug
  }
`;
