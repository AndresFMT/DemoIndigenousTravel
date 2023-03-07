import groq from 'groq'

export const groqPageQuery = groq`
    *[ _type == "page" &&
    !(_id in path('drafts.**')) &&
    slug.current == $slug][0]{
      title,
      description,
      sections[]->{
        'type': sectionType,
        title,
        description,
        backgroundColor,
        content[] -> {
          _type == 'sectionImage' => {
            'type': _type,
            title,
            image
          },
          _type == 'sectionHeading' => {
            'type': _type,
            title,
            heading,
            headingColor
          },
          _type == 'sectionText' => {
            'type': _type,
            title,
            text,
            textColor
          }
        }
      }
    }
    `
