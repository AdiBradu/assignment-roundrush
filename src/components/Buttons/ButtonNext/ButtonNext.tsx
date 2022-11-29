import React from 'react';
import { Button } from '@mui/material';

interface BUTTON_NEXT {
  onClick: (event: React.MouseEvent) => void;
}

function ButtonNext({ onClick }: BUTTON_NEXT) {
  return (
    <Button fullWidth variant="login" disableElevation onClick={onClick}>
      Next
    </Button>
  );
}

export default ButtonNext;
