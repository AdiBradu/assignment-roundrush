//Material UI
import { Stack, Typography, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
//Media
import { ReactComponent as More } from '../../../assets/icons/more_horizontal.svg';

interface ObjectiveDrawerCheckmarksItemProps {
  name: string;
}

const StyledStack = styled(Stack)(() => ({
  width: '100%',
  justifyContent: 'space-between',
  padding: '17px 24px',
  alignItems: 'center',
  justifyItems: 'center',
  '&:hover': {
    backgroundColor: '#E8F0FE',
  },
}));

const StyledStackIcons = styled(Stack)(() => ({
  justifyContent: 'space-between',
  gap: '16px',
  alignItems: 'center',
  justifyItems: 'center',
}));

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#000',
}));

const StyledChekbox = styled(Checkbox)(() => ({
  padding: 0,
  color: '#B9B9B9',
}));

export const ObjectiveDrawerCheckmarksItem = ({
  name,
}: ObjectiveDrawerCheckmarksItemProps) => {
  return (
    <StyledStack flexDirection={'row'}>
      <StyledTypography>{name}</StyledTypography>
      <StyledStackIcons flexDirection={'row'}>
        <More />
        <StyledChekbox />
      </StyledStackIcons>
    </StyledStack>
  );
};
