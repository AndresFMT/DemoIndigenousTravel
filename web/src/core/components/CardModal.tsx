import React, {ReactElement} from "react";
import {
  Modal,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";

type CardModalProps = {
  open: boolean;
  content: {
    name: string;
    jobTitle?: string;
    bioText: ReactElement | string;
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

const CardModal = ({ open, content, handleClose }:CardModalProps) => {
  const {
    name,
    jobTitle,
    bioText
  } = content;

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby={name}
      aria-describedby={''}
    >
      <Box sx={style}>
        <Typography variant='h6'>
          {name}
        </Typography>
        <Typography variant='body1'>
          {jobTitle}
        </Typography>
          {bioText}
      </Box>
    </Modal>
  );
};

export default CardModal
