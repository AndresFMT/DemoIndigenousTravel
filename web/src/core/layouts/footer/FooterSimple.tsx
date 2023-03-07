// @mui
import { Container, Typography } from '@mui/material';
// components
import { Logo } from 'src/core/components';

// ----------------------------------------------------------------------

export default function FooterSimple() {
  return (
    <Container sx={{ textAlign: 'center', py: 8, background: 'footer.background'}}>
      <Logo isSimple sx={{ mb: 3 }} />
      <Typography variant="body3" sx={{ color: 'text.footer.secondary' }}>
        © 2023. All rights reserved
      </Typography>
    </Container>
  );
}
