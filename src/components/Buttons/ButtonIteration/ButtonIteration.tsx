//Material UI
import { Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
//Media
import { ReactComponent as MoreVertical } from '../../../assets/icons/more_vertical.svg';

const StyledButton = styled(Button)(() => ({
  background: '#E8F0FE',
  padding: '6px 24px',
  gap: '60px',
  borderRadius: '6px',
  '&:hover': {
    background: '#E8F0FE',
  },
}));

const StyledTypographyOne = styled(Typography)(() => ({
  color: '#4C84FF',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'Rubik',
  textTransform: 'capitalize',
}));

const StyledTypographyTwo = styled(Typography)(() => ({
  color: '#4C84FF',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'Rubik',
  textTransform: 'uppercase',
  fontWeight: 500,
}));

export const ButtonIteration = () => {
  return (
    <StyledButton endIcon={<MoreVertical />}>
      <Stack sx={{ gap: '8px', flexDirection: 'row' }}>
        <StyledTypographyOne>Iteration type: </StyledTypographyOne>
        <StyledTypographyTwo>round</StyledTypographyTwo>
      </Stack>
    </StyledButton>
  );
};
