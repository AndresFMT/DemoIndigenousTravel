import { styled } from '@mui/material/styles';

const RootStyle = styled('section')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
}));

export default RootStyle;
