//Material UI
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
//Media
import { ReactComponent as Rocket } from '../../../assets/icons/rocket.svg';

const StyledButton = styled(Button)(() => ({
  background: '#29C293',
  padding: '6px 24px',
  gap: '8px',
  borderRadius: '6px',
  '&:hover': {
    background: '#29C293',
  },
}));

const StyledTypography = styled(Typography)(() => ({
  color: '#fff',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'Rubik',
  textTransform: 'capitalize',
}));

export const ButtonUpgrade: React.FC = () => {
  return (
    <StyledButton startIcon={<Rocket />}>
      <StyledTypography>upgrade</StyledTypography>
    </StyledButton>
  );
};
