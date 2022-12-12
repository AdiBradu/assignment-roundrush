//Material UI
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  width: '129px',
  padding: '6px 28px',
  border: '2px solid #4C84FF',
  borderRadius: '6px',
  textTransform: 'capitalize',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#4C84FF',
  '&:hover': {
    backgroundColor: '#fff',
  },
}));

export const ButtonMilestones = () => {
  return <StyledButton>Milestones</StyledButton>;
};
