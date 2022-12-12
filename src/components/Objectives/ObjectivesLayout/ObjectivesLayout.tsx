//Material UI
import { Box, Stack } from '@mui/system';
import { styled } from '@mui/system';

interface ObjectivesLayoutProps {
  children: JSX.Element[];
}

const StyledBox = styled(Box)(() => ({
  background: '#fff',
  width: '100%',
  height: '100%',
  position: 'relative',
  paddingRight: '50px',
}));

const StyledStack = styled(Stack)(() => ({
  width: '100%',
}));

export const ObjectivesLayout = ({ children }: ObjectivesLayoutProps) => {
  return (
    <StyledBox>
      <StyledStack flexDirection={'row'}>{children}</StyledStack>
    </StyledBox>
  );
};
