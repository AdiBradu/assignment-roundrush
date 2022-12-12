//Material UI
import { styled } from '@mui/system';
import { Stack } from '@mui/material';

interface CardAuthProps {
  children?: JSX.Element | JSX.Element[];
}

const StyledStack = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: '540px',
  padding: '47px 98px 58px 98px',
  borderRadius: '6px',
  backgroundColor: '#ffffff',
  boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
  marginTop: '57px',
}));

export const CardAuth: React.FC<CardAuthProps> = ({ children }) => {
  return <StyledStack flexDirection={'column'}>{children}</StyledStack>;
};
