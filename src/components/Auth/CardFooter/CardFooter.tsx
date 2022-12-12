//Material UI
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
interface CardFooterProps {
  children?: JSX.Element | JSX.Element[];
}

const StyledStack = styled(Stack)(() => ({
  width: '100%',
  alignItems: 'center',
  marginTop: '20px',
  justifyContent: 'center',
}));

export default function CardFooter({ children }: CardFooterProps) {
  return <StyledStack flexDirection={'row'}>{children}</StyledStack>;
}
