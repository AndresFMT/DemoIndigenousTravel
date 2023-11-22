import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import { PortableTextBlock } from '@portabletext/types';


export type Content = {
  type?: string;
  image?: SanityEnrichedImageObject;
  images?: Array<{
    image: SanityEnrichedImageObject;
    flip: boolean;
  }>;
  bio?: PortableTextBlock[];
  title?: string;
  name?: string;
  jobTitle?: string;
  heading?: string;
  text?: string;
  size?: string;
  description?: string;
  messages?: Array<string>;
  backgroundColor?: SanityColorProps;
  headingOverlay?: string;
  kicker?: string;
  textOverlay?: string;
  _type: string;
  _key?: string;

  operators?: Array<Operator>;
}

export type Section = {
  type?: string;
  image?: SanityEnrichedImageObject;
  images?: Array<{
    image: SanityEnrichedImageObject;
    flip: boolean;
  }>;
  rows?: Array<string | any>;
  content?: Array<Content>;
  bio?: PortableTextBlock[];
  title?: string;
  name?: string;
  jobTitle?: string;
  heading?: string;
  text?: string;
  size?: string;
  description?: string;
  messages?: Array<string>;
  backgroundColor?: SanityColorProps;
  headingOverlay?: string;
  kicker?: string;
  textOverlay?: string;
  operators?: Array<Operator>;
  _type: string;
  _key?: string;

};

export type SanityColorProps = {
  _type: string;
  hex: string;
  alpha: number;
  hsl: {
    h: number;
    s: number;
    l: number;
    a: number;
  };
  hsv: {
    h: number;
    s: number;
    v: number;
    a: number;
  };
  rgb: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}
export interface SanityAccessibleImage extends SanityEnrichedImageObject {
  caption?: string;
  alt?: string;
}

export interface SanityEnrichedImageObject extends SanityMetaDataObject {
  _id: string;
  asset: {
    url: string;
    alt: string;
    metadata: SanityMetaDataObject & {
      dimensions: {
        width: number;
        height: number;
      }
      lqip:`data:image/${string}` ;
    }
  },
  imageOverlay?: SanityColorProps;
}

export interface SanityMetaDataObject extends SanityImageObject{
  asset: {
    metadata: {
    lqip: string;
    };
  };
}

export type SanityPageProps = {
  _type: string;
  _key: string;
  _id: string;
  image?: SanityEnrichedImageObject;
  images?: Array<{
    image: SanityEnrichedImageObject;
    flip: boolean;
  }>;
  regionalImages?: Array<SanityAccessibleImage>;
  content?: Array<Content>;
  sections?: Array<Section>;
  title?: string;
  heading?: string;
  text?: string;
  description?: string;
  messages?: Array<string>;
  videoUrl?: string;
  enableCTA?: boolean;
  kicker?: string;
  operators?: Array<Operator>;
}

export type HomepageContent = {
  _type: string;
  _key?: string;
  _id?: string;
  type?: string;
  image?: SanityEnrichedImageObject;
  images?: Array<{
    image: SanityEnrichedImageObject;
    flip: boolean;
  }>;
  content?: Array<Content>;
  sections?: Array<Section>;
  title?: string;
  heading?: string;
  text?: string;
  description?: string;
  messages?: Array<string>;
  videoUrl?: string;
  enableCTA?: boolean;
  kicker?: string;
  operators?: Array<Operator>;
}


export type HoopImage = {
  image: SanityEnrichedImageObject;
  title?: string;
  headingOverlay?: string;
  textOverlay?: string;
  backgroundColor?: {
    hex: string;
    rgb: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  };
  type?: string;
}



export type ReducedContent = {
  image?: SanityEnrichedImageObject;
  title?: string;
  type?: string;
  heading?: string;
  headingColor?: {
    hex: string;
  };
  text?: string;
  textColor?: {
    hex: string;
  };
  messages?: string[];
  hoopImages?: Array<HoopImage>;

}

type SanitySlug = {
  _type: string;
  current: string;
}

export type Operator = {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  email: string;
  images: Array<SanityEnrichedImageObject>;
  image: SanityEnrichedImageObject;
  location: string;
  name: string;
  phoneNumber: number;
  region: string;
  slug: SanitySlug;
  zoomLevel?: number;
  website: string;
  categories?: Array<string>;
  category?: string;
  description: PortableTextBlock[];
  shortDescription?: string;
  _id: string;
}
