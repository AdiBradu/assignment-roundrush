//Material UI
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  padding: '6px 0px',
  border: 'none',
  textTransform: 'capitalize',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#ADB0B8',
  '&:hover': {
    backgroundColor: '#fff',
  },
}));

export const ButtonRequirements = () => {
  return <StyledButton>Requirements</StyledButton>;
};
