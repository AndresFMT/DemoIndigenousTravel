import { m } from 'framer-motion';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import {PortableTextBlock} from '@portabletext/types';
import { Typography, Stack } from '@mui/material';

import SanityImage from 'src/core/components/SanityImage';
import { varFade } from 'src/core/components';

type PortableBlockProps = {
  id: string;
  _type: string;
  name: string;
};

type PortableTextProps = {
  body?: (PortableTextBlock | PortableBlockProps)[];
}

const PortableTextRender = (props: PortableTextProps) => {
  const { body } = props;
  if (body == undefined) {
    return null;
  }
  return (
      <Stack spacing={2}>
        <PortableText value={body} components={components} onMissingComponent={warnMissingComponent} />
      </Stack>
  )
}

/**
 * TODO: update Image component to properly size images based on context and/or hotspot & crop data
 **/
const components: PortableTextComponents = {
  types: {
    image: (props) => {
      return <SanityImage {...props.value} alt={props.value.alt} />
    },
    code: (props) => {
      return (
        <pre>
          <code>
            {props.value}
          </code>
        </pre>
      )
    },
    normal: (props) => {
      return (
        <Typography variant="body1" component={m.p} variants={varFade().inUp}>{props.value}</Typography>
      )
    },

  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => <em className="text-gray-600 font-semibold">{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank'? '_blank': 'noindex nofollow'}>
          {children}
        </a>
      )
    },
    strong: ({ children }) => <strong>{children}</strong>,
  },
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <Typography variant='body1' component={m.div} variants={varFade().inUp}>{children}</Typography>,
    h1: ({ children }) => <Typography variant='h1' component={m.h2} variants={varFade().inUp}>{children}</Typography>,
    h2: ({ children }) => <Typography variant='h2' component={m.h2} variants={varFade().inUp}>{children}</Typography>,
    h3: ({ children }) => <Typography variant='h3' component={m.h3} variants={varFade().inUp}>{children}</Typography>,
    h4: ({ children }) => <Typography variant='h4' component={m.h4} variants={varFade().inUp}>{children}</Typography>,
    blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <Typography variant='subtitle1'>{children}</Typography>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li>{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
}
  ;

const warnMissingComponent = (component: string) => {
  console.warn(`Component "${component}" not found. Did you forget to add it to the components prop?`)
}

export default PortableTextRender;

