type Props = {
  backgroundColor?: {
    hex: string;
  }
}

const BlankSpace = ({backgroundColor}: Props) => {

  const sectionBackground = backgroundColor ? backgroundColor.hex : 'primary.main';
  const sectionSX = {
    backgroundColor: sectionBackground,
    height: '100px',
  };

  return (
    <div style={sectionSX}></div>
  )
}

export default BlankSpace;
