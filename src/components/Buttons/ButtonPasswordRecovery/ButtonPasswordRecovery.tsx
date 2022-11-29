import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_PASSWORD_RECOVERY {
  onClick: (event: React.MouseEvent) => void;
}

const ButtonPasswordRecovery = ({ onClick }: BUTTON_PASSWORD_RECOVERY) => {
  return (
    <Button fullWidth variant="login" disableElevation onClick={onClick}>
      Recover your password
    </Button>
  );
};

export default ButtonPasswordRecovery;
