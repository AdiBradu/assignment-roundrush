//Material UI
import { useTheme } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
//Media
import { ReactComponent as WarningSign } from '../../../assets/icons/warning.svg';
import { ReactComponent as SuccesSign } from '../../../assets/icons/success.svg';
interface AuthMessageProps {
  error?: boolean | null;
  message?: string;
}

export const AuthStatus = ({ error, message }: AuthMessageProps) => {
  const theme = useTheme();
  return (
    <Stack
      flexDirection={'row'}
      sx={{
        justifyContent: 'center',
        gap: '18px',
        background: theme.custom.authStatusBackground,
        borderRadius: '4px',
        border: `1px solid ${theme.custom.authStatusBackground}`,
        padding: '8px 12px',
        width: '100%',
      }}
    >
      {error ? <WarningSign /> : <SuccesSign />}
      <Typography
        variant="authStatus"
        textAlign={'left'}
        color={theme.custom}
        sx={{ color: error ? theme.custom.warning : theme.custom.success }}
      >
        {message}
      </Typography>
    </Stack>
  );
};
