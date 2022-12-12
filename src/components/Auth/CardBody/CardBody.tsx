//Material UI
import { styled } from '@mui/system';
import { Stack } from '@mui/material';
interface CardBodyProps {
  children?: JSX.Element | JSX.Element[];
}

const StyledStack = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  width: '100%',
}));

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <StyledStack flexDirection={'column'}>{children}</StyledStack>;
};
