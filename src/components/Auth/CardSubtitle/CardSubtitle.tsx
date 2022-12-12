//Material UI
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

interface CardSubTitleProps {
  subtitle: string;
}

const StyledTypography = styled(Typography)(() => ({
  color: '#5a6171',
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
}));

export const CardSubtitle: React.FC<CardSubTitleProps> = ({ subtitle }) => {
  return <StyledTypography>{subtitle}</StyledTypography>;
};
