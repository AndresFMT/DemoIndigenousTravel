import { Section } from 'src/@types/sanity';
import {
  HeroImage,
  SectionText,
  SectionTextImage,
} from 'src/sections/basic';

type Props = {
  title: string;
  description: string;
  sections: Array<Section>;
};

const DynamicGenericSections = (props: Props) => {
  return (
    <>

      {props.sections && props.sections.length > 0 &&
        props.sections.map((section, index) => {

          switch (section.type) {
            case 'heroImage':
              return <HeroImage {...section} key={index} />;
            case 'sectionText':
              return <SectionText {...section} key={index} />;
            case 'sectionTextImage':
              return <SectionTextImage {...section} key={index} />;
          }
        })
      }
    </>
  )
}

export default DynamicGenericSections;
