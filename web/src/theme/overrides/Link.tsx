import NextLink from 'next/link';
import { forwardRef } from 'react';
// ----------------------------------------------------------------------

const LinkBehavior = forwardRef(function LinkBehavior(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

export default function Link() {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },

      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
  };
}
