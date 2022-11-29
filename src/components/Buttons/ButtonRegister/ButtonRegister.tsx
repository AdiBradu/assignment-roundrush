import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_REGISTER {
  onClick: (event: React.MouseEvent) => void;
}

const ButtonRegister = ({ onClick }: BUTTON_REGISTER) => {
  return (
    <Button fullWidth variant="register" disableElevation onClick={onClick}>
      register
    </Button>
  );
};

export default ButtonRegister;
