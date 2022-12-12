import React from 'react';
//Material UI
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BUTTON_PASSWORD_RECOVERY {
  onClick?: (event: React.MouseEvent) => void;
  isValid?: boolean;
  text: string;
}

const StyledButton = styled(Button)((color) => ({
  background: '#4c84ff',
  borderRadius: '6px',
  color: '#ffffff',
  textTransform: 'capitalize',
  padding: '14px 0px',
  fontFamily: 'Rubik',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  letterSpacing: '0px',
  textAlign: 'center',
  ':hover': {
    background: '#4c84ff',
  },
}));

const ButtonPrimary = ({
  onClick,
  isValid,
  text,
}: BUTTON_PASSWORD_RECOVERY) => {
  return (
    <StyledButton
      fullWidth
      disableElevation
      onClick={onClick}
      disabled={isValid ? false : true}
    >
      {text}
    </StyledButton>
  );
};

export default ButtonPrimary;
