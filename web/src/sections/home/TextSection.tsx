import React  from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Img from 'next/image';

import {
  Typography,
  Container,
  Stack,
  Box
} from '@mui/material'
import { styled } from '@mui/material/styles';
import SanityImage from 'src/core/components/SanityImage';
import { SanityEnrichedImageObject, SanityColorProps} from 'src/@types/sanity';

export interface PortableBlockProps {
  id: string;
  _type: string;
  name: string;
};

interface Props {
  heading?: string;
  richText: PortableBlockProps[];
  image?: SanityEnrichedImageObject;
  className?: string;
};

const RootStyle = styled('section')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
}));


const getBackgroundColor = (color?: SanityColorProps ) => {
  if (color == undefined) {
    return 'rgba(0,0,0,0.0)';
  }
  return `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
}

const calculateBackgroundLuminance = (color?: SanityColorProps) => {
  if (color == undefined) {
    return 1;
  }
  return (0.299 * color.rgb.r + 0.587 * color.rgb.g + 0.114 * color.rgb.b) / 255;
}


const PortableBlock = (props: Props): JSX.Element => {
  const { heading, richText, image} = props;

  const backgroundColor = getBackgroundColor(image?.imageOverlay);
  const isBackgroundLight = calculateBackgroundLuminance(image?.imageOverlay) < 0.5;
  const fontColor = isBackgroundLight ?  'primary.contrastText': 'primary.text' ;
  const fontWeight = isBackgroundLight ? '700' : '500';

  return (
    <RootStyle>
        <Box sx={{ position: 'absolute', height: '100%', width: '100%', zIndex:'-1' }}>
          <Box sx={{ position: 'absolute', height: '100%', width: '100%', zIndex: 11111, backgroundColor: backgroundColor}} />
          <SanityImage image={image}/>
        </Box>
      <Container maxWidth="lg">
        <Stack spacing={5} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="flex-start" sx={{ color: fontColor, fontWeight: fontWeight, width: '100%', py: { xs: 5, md: 5}, px: { xs: 5,md: 15, lg: 30}}}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            {heading}
          </Typography>
          <PortableText value={richText} components={components} onMissingComponent={warnMissingComponent}/>
        </Stack>
      </Container>
    </RootStyle>
  );
};

/**
 * TODO: update Image component to properly size images based on context and/or hotspot & crop data
 **/
const components: PortableTextComponents = {
  types: {
    image: (props) => {
      return <Img {...props.value}  alt={props.value.alt} />
    },
    code: (props) => {
      return (
        <pre><code>
          {props.node?.code}
        </code></pre>
      )
    },
    normal: (props) => {
      return (
        <Typography variant="body1">{props.children}</Typography>
      )
    },

  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
          {children}
        </a>
      )
    },
    strong: ({children}) => <Typography variant="body1" sx={{fontWeight: 'bold'}}>{children}</Typography>,
  },
   block: {
    // Ex. 1: customizing common block types
    normal: ({children}) => <Typography variant='body1'>{children}</Typography>,
    h1: ({children}) => <Typography variant='h1' component='h2'>{children}</Typography>,
    h2: ({children}) => <Typography variant='h2' component='h2'>{children}</Typography>,
    h3: ({children}) => <Typography variant='h3' component='h3'>{children}</Typography>,
    h4: ({children}) => <Typography variant='h4' component='h4'>{children}</Typography>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}) => (
      <Typography variant='subtitle1'>{children}</Typography>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <li>{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({children}) => <li>✅ {children}</li>,
  },
}
const warnMissingComponent = (componentName: string) => {
  console.warn(`Missing component for ${componentName}`);
};

export default PortableBlock;

