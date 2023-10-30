import { styled } from '@mui/material/styles';

const RootStyle = styled('section')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '100%',
    height: 'auto',
  },
}));

export default RootStyle;
