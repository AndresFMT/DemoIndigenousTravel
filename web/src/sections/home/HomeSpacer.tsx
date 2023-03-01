import { Box } from '@mui/material';

import { useTheme } from '@mui/material/styles';

type Props = {
  space?: number;
};

const HomeSpacer = ({space=2}: Props) => {
  const theme = useTheme();
  return (
    <Box sx={{ paddingY: theme.spacing(space)}} />
  );
};


export default HomeSpacer;
