
import { m } from 'framer-motion';

import { styled } from '@mui/material/styles';

import {  Stack,  Typography, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Scrollbar } from 'src/core/components';
import ListImage from './ListImage';

import { Operator } from 'src/@types/sanity';

type OperatorListProps = {
  operators: Operator[];
  selectedOperator?: Number;
  onItemClick: (index: Number) => void;
}

const StyledListContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.green,
  paddingTop: theme.spacing(3),
  position: 'relative',
  height: '100%',
  flex: '1 1 0',
  zIndex: 10,
}));

const StyledListTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: theme.palette.primary.green,
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const OperatorList = ({ operators, onItemClick, selectedOperator }: OperatorListProps) => {

  return (
    <StyledListContainer>
      <StyledListTitle variant='h3'>Operators</StyledListTitle>
      <List sx={{  height: '100%', overflowY: 'scroll', msOverflowStyle:'none', scrollbarWidth:'none', '&::-webkit-scrollbar': {display: 'none'}}}>
        <Scrollbar >
        {
          operators.map((operator: Operator, index: Number) => {
            const key = `${operator.slug.current}-${index}`;
            const selected = selectedOperator === index;
            const primary = (<Typography variant='h5' component={'h5'} color={theme => theme.palette.primary.contrastText} >{operator.name}</Typography>);
            const secondary = `${operator.location}, MB`;
            const selectedSecondary = (<>  {secondary} <br /> <Typography variant='body1'sx={{ fontWeight: 'normal'}} >{operator.shortDescription}</Typography></>);
            return (
              <ListItem
                key={key}
                disableGutters
                disablePadding
                sx={{
                  border: '1px solid',
                  borderColor: 'primary.main',
                }}
              >
                <ListItemButton
                  selected={selected}
                  component={m.div}
                  disableGutters
                  animate={{
                    height: selected ? '200px' : '100px'
                  }}
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'flex-end',
                    width: '100%',
                    paddingBottom: '0px',
                    overflow: 'hidden',
                  }}

                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick(index);
                  }}
                >
                  <ListItemText
                    primary={primary}
                    secondary={selected ? selectedSecondary : secondary}
                    secondaryTypographyProps={{
                      sx: {
                        color: theme => theme.palette.grey[100],
                        fontWeight: 'bold',
                        backgroundColor:'transparent',
                      }
                    }}
                    sx={{
                      paddingTop: theme => theme.spacing(2),
                      paddingBottom: theme => theme.spacing(2),
                      color: theme => theme.palette.grey[200],
                      fontWeight: 'bold',
                      height: 'fit-content',
                      paddingLeft: 2,
                    }}
                  />
                  <ListImage image={operator.image} selected={selected} />
                </ListItemButton>
              </ListItem>
            )
          })
        }
        </Scrollbar>
      </List>
    </StyledListContainer>
  )
}

export default OperatorList;

