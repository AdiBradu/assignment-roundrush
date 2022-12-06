import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_NEXT {
  onClick: (event: React.MouseEvent) => void;
}

function ButtonGoToLogin({ onClick }: BUTTON_NEXT) {
  return (
    <Button fullWidth variant="login" disableElevation onClick={onClick}>
      Click here to authentication
    </Button>
  );
}

export default ButtonGoToLogin;
