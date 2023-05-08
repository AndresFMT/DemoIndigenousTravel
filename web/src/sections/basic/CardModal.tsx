import React from "react";
import {
  Modal,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";

type CardModalProps = {
  open: boolean;
  content: {
    title: string;
    text: string;
  },
  handleClose: Function
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CardModal: React.FC<CardModalProps> = ( { open, content, handleClose } ) => {
  const {
    title,
    text
  } = content;

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labeledby={title}
      aria-describedby={text}
    >
      <Box sx={style}>
        <Typography variant='h6'>
          {title}
        </Typography>
        <Typography variant='body1'>
          {text}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CardModal
