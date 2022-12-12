import React from 'react';
//Material UI
import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '28px',
  color: '#151B26',
  textTransform: 'capitalize',
}));

export const ObjectiveDrawerContentTitle = () => {
  return <StyledTypography>Notification Center</StyledTypography>;
};
