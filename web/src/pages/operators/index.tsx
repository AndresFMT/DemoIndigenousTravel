import { ReactElement } from 'react'

import client from 'integrations/sanity.client';

import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material'

import Layout from 'src/core/layouts/Layout'
import { Page, Image, SanityImage } from 'src/core/components'
import { groqOperatorQuery } from 'src/utils/pageQuery'




type Props = {
  title?: string;
  description?: string;
  [key: string]: any;
};

const StyledOperatorList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '100vw',
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
}));

const StyledOperatorCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  minHeight: '400px',
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(2),
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
}));

const OurTeamPage = (props: Props) => {
  const {title, description, operators} = props;

  return (
      <Page title={title || "ITM"} meta={description}>
        <h1>Our Team</h1>
        <p>Our team is made up of a group of people who are passionate about Indigenous tourism and the growth of the industry in Manitoba. We are here to help you with any questions you may have about Indigenous tourism in Manitoba.</p>

        <StyledOperatorList>
        {
          operators.map((operator: any) => {
            const shortDescription = operator.description?.[0]?.children?.[0]?.text || description
            return (
              <StyledOperatorCard key={operator._id} >
                <SanityImage image={operator.image} alt={operator.name} sx={{height:'300px'}} fullWidth/>
                <Typography variant={'h4'} component={'h3'}>{operator.name}</Typography>
                <Typography variant={'body1'}>{shortDescription}</Typography>
              </StyledOperatorCard>
            )
          })
        }
        </StyledOperatorList>
      </Page>
  )
}

OurTeamPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout >{page}</Layout>;
}

export async function getStaticProps() {

  const data = await client.fetch(groqOperatorQuery)
  return {
    props: {
      operators: [...data]
    },
    revalidate: 300
  }
}

export default OurTeamPage;

