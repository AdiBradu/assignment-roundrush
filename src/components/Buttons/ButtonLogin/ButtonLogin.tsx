import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_LOGIN {
  onClick: (event: React.MouseEvent) => void;
}

const ButtonLogin = ({ onClick }: BUTTON_LOGIN) => {
  return (
    <Button fullWidth variant="login" disableElevation onClick={onClick}>
      login
    </Button>
  );
};

export default ButtonLogin;
