//Material UI
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonIconProps {
  icon: JSX.Element;
  onClick?: () => void;
}

const StyledButton = styled(Button)(() => ({
  padding: 0,
  margin: 0,
  minWidth: 'auto',
  '& .MuiButton:hover': {
    backgroundColor: 'none',
  },
}));

export const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, onClick }) => {
  return <StyledButton onClick={onClick}>{icon}</StyledButton>;
};
