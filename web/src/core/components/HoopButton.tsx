import { m } from 'framer-motion';
import { Button } from '@mui/material';

import Hoop from 'src/core/components/Hoop';

const HoopButton = ({ children }: any) => {

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      sx={{
        borderRadius: '50%',
        aspectRatio: '1/1',
        minWidth: '150px',
        minHeight: '150px',
      }}
    >
      <m.div
        whileHover={{
          scale: 1.05,
          rotate: 40,
        }}
        whileTap={{
          scale: 0.95,
          rotate: -40,
        }}
        style={{
          position: 'absolute',
        }}
      >
        <Hoop />
      </m.div>
      {children}
    </Button>
  );
};

export default HoopButton;
