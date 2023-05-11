import { ReactElement } from 'react';
// icons
import logoLinkedin from '@iconify/icons-carbon/logo-linkedin';
import logoFacebook from '@iconify/icons-carbon/logo-facebook';
import logoTwitter from '@iconify/icons-carbon/logo-twitter';
import logoInstagram from '@iconify/icons-carbon/logo-instagram';
// @mui
import { alpha, SxProps } from '@mui/material/styles';
import { Stack, IconButton, Button, Link, IconButtonProps, ButtonProps} from '@mui/material';
//
import Iconify from './Iconify';
import { SocialLinks } from 'src/@types/socials';

// ----------------------------------------------------------------------
type Props = IconButtonProps & ButtonProps;

interface SocialsButtonProps extends Props {
  simple?: boolean;
  initialColor?: boolean;
  links?: SocialLinks;
  sx?: SxProps
}


export default function SocialsButton ({
  initialColor = false,
  simple = true,
  links = {},
  sx,
  ...other
}: SocialsButtonProps):ReactElement<SocialsButtonProps> {
  const socialDefaults = [
    {
      name: 'FaceBook',
      icon: logoFacebook,
      socialColor: '#1877F2',
      path: links.facebookLink || '#',
    },
    {
      name: 'Instagram',
      icon: logoInstagram,
      socialColor: '#E02D69',
      path: links.instagramLink || '#',
    },
    {
      name: 'Linkedin',
      icon: logoLinkedin,
      socialColor: '#007EBB',
      path: links.linkedinLink || '#',
    },
    {
      name: 'Twitter',
      icon: logoTwitter,
      socialColor: '#00AAEC',
      path: links.twitterLink || '#',
    },
  ];
  const SOCIALS = socialDefaults.filter( l => l.path !== '#' );

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={2}>
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Link key={name} href={path}>
            <IconButton
              color="inherit"
              sx={{
                ...(initialColor && {
                  color: socialColor,
                  '&:hover': {
                    bgcolor: alpha(socialColor, 0.08),
                  },
                }),
                ...sx,
              }}
              {...other}
            >
              <Iconify icon={icon} sx={{ width: 20, height: 20 }} />
            </IconButton>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
