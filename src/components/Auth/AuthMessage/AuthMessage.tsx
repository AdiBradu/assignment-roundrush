//Material UI
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
interface AuthMessageProps {
  message: string;
}

const StyleTypography = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '24px',
  letterSpacing: '6px',
  textTransform: 'uppercase',
  maxWidth: '42ch',
  color: '#4c84ff',
  marginTop: '26px',
}));

function AuthMessage({ message }: AuthMessageProps) {
  return <StyleTypography textAlign={'center'}>{message}</StyleTypography>;
}

export default AuthMessage;
