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
