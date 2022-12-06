import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_NEXT {
  onClick: (event: React.MouseEvent) => void;
  isValid?: boolean;
}

function ButtonNext({ onClick, isValid }: BUTTON_NEXT) {
  return (
    <Button
      fullWidth
      variant="login"
      disableElevation
      onClick={onClick}
      disabled={isValid ? false : true}
    >
      Next
    </Button>
  );
}

export default ButtonNext;
