// @mui
import { Container, Typography } from '@mui/material';
// components
import { Logo } from 'src/core/components';

// ----------------------------------------------------------------------

export default function FooterSimple() {
  const initialYear = 2023;
  const year = new Date().getFullYear();
  const isCurrentYear = initialYear === year;
  const displayYear = isCurrentYear ? year : `${initialYear} - ${year}`;
  return (
    <Container sx={{ textAlign: 'center', py: 8, background: 'footer.background'}}>
      <Logo isSimple sx={{ mb: 3 }} />
      <Typography variant="body3" sx={{ color: 'text.footer.secondary' }}>
        © {displayYear}. All rights reserved
      </Typography>
    </Container>
  );
}
