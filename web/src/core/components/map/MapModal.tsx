import {useCallback, useEffect, forwardRef, JSXElementConstructor, ReactElement} from "react";
import clsx from "clsx";
import {Modal, Slide} from "@mui/material";
import {styled} from "@mui/material/styles";

import { m } from 'framer-motion';

import {useInteractiveMapContext} from "src/contexts/InteractiveMapContext";

type MapModalProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

/**
 * a map modal container to use with the map context
 * this container will control when the map appears on screen.
 */
const MapModal = ({children}: MapModalProps) => {
  // keep it simple this modal only needs to know whether it is visible or not
  const {isMapVisible, closeMap} = useInteractiveMapContext();

  const escape = useCallback((e:KeyboardEvent) => {
    console.log('intercepted')
    if (e.key === 'Escape') {
      closeMap();
    }
  }, [closeMap]);

  useEffect(() => {
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [escape]);

  return (
      <StyledMapModal
        open={isMapVisible}
        slots={{backdrop: StyledBackdrop}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
      <Slide direction="up" in={isMapVisible} mountOnEnter unmountOnExit>
        {children}
       </Slide>
     </StyledMapModal>
  );
}

export default MapModal;

const StyledMapModal = styled(Modal)(({theme}) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  zIndex: theme.zIndex.drawer + 20,
  padding: theme.spacing(12, 0),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Backdrop = forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <m.div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      variants={backdropVariants}
      {...other}
    />
  );
});


const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: -1,
  position: 'fixed',
  inset: 0,
  backgroundColor: theme.palette.background.dark,
  color: theme.palette.text.primary,
  webkitTapHighlightColor: 'transparent',
}));

