import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_PASSWORD_RECOVERY {
  onClick: (event: React.MouseEvent) => void;
  isValid: boolean;
}

const ButtonPasswordRecovery = ({
  onClick,
  isValid,
}: BUTTON_PASSWORD_RECOVERY) => {
  return (
    <Button
      fullWidth={true}
      variant="login"
      disableElevation
      onClick={onClick}
      disabled={isValid ? false : true}
    >
      Recover your password
    </Button>
  );
};

export default ButtonPasswordRecovery;
