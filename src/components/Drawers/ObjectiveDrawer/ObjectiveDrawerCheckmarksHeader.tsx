//Material UI
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
//Media
import { ReactComponent as Add } from '../../../assets/icons/add.svg';
//components
import { ButtonIcon } from '../../Buttons/ButtonIcon/ButtonIcon';

const StyledLayout = styled(Stack)(() => ({
  width: '100%',
  justifyContent: 'space-between',
  padding: '17px 24px 17px 33px',
  alignItems: 'center',
  justifyItems: 'center',
}));

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '14px',
  textTransform: 'uppercase',
  color: '#4C84FF',
}));

export const ObjectiveDrawerCheckmarksHeader = () => {
  return (
    <StyledLayout flexDirection={'row'}>
      <StyledTypography>checkmarks</StyledTypography>
      <Add />
    </StyledLayout>
  );
};
