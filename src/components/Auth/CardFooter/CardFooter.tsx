//Material UI
import { styled } from '@mui/system';
import { Stack } from '@mui/material';

interface CardFooterProps {
  children?: JSX.Element | JSX.Element[];
}

const StyledStack = styled(Stack)(() => ({
  width: '100%',
  alignItems: 'center',
  marginTop: '20px',
  justifyContent: 'center',
}));

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <StyledStack flexDirection={'row'}>{children}</StyledStack>;
};
