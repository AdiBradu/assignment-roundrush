//Material UI
import { styled } from '@mui/system';
import { Stack } from '@mui/material';
interface CardHeaderProps {
  children?: JSX.Element | JSX.Element[];
}

const StyledStack = styled(Stack)(() => ({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '16px',
  marginBottom: '51px',
  gap: '16px',
}));

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <StyledStack flexDirection={'column'}>{children}</StyledStack>;
};
