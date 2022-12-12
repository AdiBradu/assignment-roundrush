import React from 'react';
//Material UI
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonTextProps {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
}

const StyledButton = styled(Button)(() => ({
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#4c84ff',
  textTransform: 'none',
  padding: 0,
}));

export const ButtonText: React.FC<ButtonTextProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
