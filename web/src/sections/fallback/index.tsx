import React from 'react';

import { default as homepageHoopImage } from './HomeHoopImage';
import { default as textSection } from './TextSection';
import { default as videoSection } from './VideoSection';
import { default as imageHero } from './ImageHero';
import { default as flexSection } from './FlexSection';
import { default as sectionCards } from './SectionCards';

const sections = {
  homepageHoopImage,
  textSection,
  videoSection,
  imageHero,
  flexSection,
  sectionCards
};

type Props = {
  _type: string;
};

const Fallback = (props:Props) => {
  const { _type } = props;
  const Component = sections[_type as keyof typeof sections];
  console.log('fallback: ' , _type );

  if (Component) {
    console.log('fallback component found: ', Component);
    return <Component {...props}/>;
  }
  console.log('type not found: ' , _type );

  return (
    <div>
      <h1>{'404'}</h1>
      <p>{`Section type ${_type} not found`}</p>
    </div>
  );
};

export default Fallback;
