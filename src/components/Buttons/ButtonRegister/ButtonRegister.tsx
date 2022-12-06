import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_LOGIN {
  onClick: (event: React.MouseEvent) => void;
  isValid?: boolean;
}

const ButtonRegister = ({ onClick, isValid }: BUTTON_LOGIN) => {
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

export default ButtonRegister;
