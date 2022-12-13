//Material UI
import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
//Media
import { ReactComponent as WarningSign } from '../../../assets/icons/warning.svg';
import { ReactComponent as SuccesSign } from '../../../assets/icons/success.svg';

interface AuthMessageProps {
  error: boolean | undefined;
  message?: string;
}

const StyledStack = styled(Stack)(() => ({
  justifyContent: 'center',
  gap: '18px',
  background: '#f4f6fc',
  borderRadius: '4px',
  border: '1px solid #f4f6fc',
  padding: '8px 12px',
  width: '100%',
}));

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'error',
})<AuthMessageProps>(({ error }) => ({
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '24px',
  color: error ? '#fd5461' : '#29c293',
}));

export const AuthStatus: React.FC<AuthMessageProps> = ({ error, message }) => {
  return (
    <StyledStack flexDirection={'row'}>
      {error ? <WarningSign /> : <SuccesSign />}
      <StyledTypography textAlign={'left'} error={error}>
        {message}
      </StyledTypography>
    </StyledStack>
  );
};
