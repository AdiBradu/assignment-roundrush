import { Typography } from '@mui/material';
interface AuthMessageProps {
  message: string;
}

function AuthMessage({ message }: AuthMessageProps) {
  return (
    <Typography variant="authMessage" textAlign={'center'}>
      {message}
    </Typography>
  );
}

export default AuthMessage;
