//Material UI
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

interface CardTitleProps {
  title: string;
}

const StyledTypography = styled(Typography)(() => ({
  color: '#000000',
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '20px',
}));

export const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return <StyledTypography>{title}</StyledTypography>;
};
