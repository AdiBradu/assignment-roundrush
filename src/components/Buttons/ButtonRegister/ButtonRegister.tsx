import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_LOGIN {
  onClick: (event: React.MouseEvent) => void;
  isValid?: boolean;
}

export const ButtonRegister: React.FC<BUTTON_LOGIN> = ({ onClick, isValid }) => {
  return (
    <Button
      fullWidth
      variant="register"
      disableElevation
      onClick={onClick}
      disabled={isValid ? false : true}
    >
      register
    </Button>
  );
};
