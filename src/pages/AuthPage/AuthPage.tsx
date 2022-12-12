//Material UI
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
//Media
import { ReactComponent as RoundrushLogo } from '../../assets/logo/RoundrushLogo.svg';
//Components
import { AuthMessage } from '../../components/Auth/AuthMessage/AuthMessage';
import CardLogin from '../../components/Auth/CardLogin/CardLogin';
import CardSignup from '../../components/Auth/CardSignup/CardSignup';
import CardPasswordRecovery from '../../components/Auth/CardPasswordRecovery/CardPasswordRecovery';
//Router
import { useLocation } from 'react-router-dom';

const StyledBox = styled(Box)(() => ({
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e8f0fe 100%)',
  width: '100%',
  height: '100%',
  paddingTop: '62px',
}));

export const AuthPage: React.FC = () => {
  const route = useLocation();

  return (
    <StyledBox>
      <Stack flexDirection={'column'} sx={{ alignItems: 'center' }}>
        <RoundrushLogo />
        <AuthMessage
          message={
            route.pathname === '/auth/sign-up'
              ? 'signing up a new account'
              : 'the optimized workflow out of the box'
          }
        />
        {route.pathname === '/auth/sign-up' ? (
          <CardSignup />
        ) : route.pathname === '/auth/password-recovery' ? (
          <CardPasswordRecovery />
        ) : (
          <CardLogin />
        )}
      </Stack>
    </StyledBox>
  );
};
