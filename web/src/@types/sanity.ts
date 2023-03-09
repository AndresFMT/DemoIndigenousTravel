import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type Section = {
  type: string;
  content: Array<Content>;
  backgroundColor?: {
    hex: string;
  }
};

export type Content = {
  type?: string;
  image?: SanityImageSource;
  images?: Array<{
    image: SanityImageSource;
    flip: boolean;
  }>;
  title?: string;
  heading?: string;
  text?: string;
  description?: string;
  messages?: Array<string>;
  _type?: string;
  _key?: string;

}

export type HomepageContent = {
  type?: string;
  image: SanityImageSource;
  images?: Array<{
    image: SanityImageSource;
    flip: boolean;
  }>;
  title?: string;
  heading?: string;
  text?: string;
  description?: string;
  messages?: Array<string>;
  _type?: string;
  _key?: string;
  videoUrl?: string;
  enableCTA?: boolean;
  kicker?: string;
}


export type HoopImage = {
  image: SanityImageSource;
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


export type SanityPageProps = {
  title: string;
  description: string;
  sections: Array<Section>;
};

export type ReducedContent = {
  image?: SanityImageSource;
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
