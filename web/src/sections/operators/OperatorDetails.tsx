import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Operator } from 'src/@types/sanity';

// ----------------------------------------------------------------------

type Props = {
  operator: Operator;

};

export default function OperatorDetails({ operator}: Props) {

  const { website, address, location, phoneNumber, email, category} = operator;


  return (
    <Card>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" sx={{textTransform: 'capitalize',typography: 'h5' }}>

          {'Discover '}{category?.replaceAll('-', ' ')}
        </Stack>


        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Address
          </Typography>
          <Typography variant="body2">{ address}</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
           City
          </Typography>
          <Typography variant="body2"> {location} </Typography>
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
           Phone
          </Typography>
          <Typography variant="body2"> {phoneNumber} </Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
           Email
          </Typography>
          <Typography variant="body2"> {email} </Typography>
        </Stack>
      </Stack>


      <Stack spacing={1} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body1">Find Out More</Typography>
        </Stack>

        <NextLink href={`${website}`} passHref>
          <Link target="_blank">
            <Button size="large" variant="contained" color="inherit" >
              Visit Website
            </Button>
          </Link>
        </NextLink>
      </Stack>
    </Card>
  );
}
