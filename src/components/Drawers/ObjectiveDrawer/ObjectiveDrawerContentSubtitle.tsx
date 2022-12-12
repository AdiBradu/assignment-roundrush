//Material UI
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ObjectiveDrawerContentSubtitleProps {
  subtitle: string;
}

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '14px',
  color: '#ADB0B8',
  textTransform: 'capitalize',
}));

export const ObjectiveDrawerContentSubtitle = ({
  subtitle,
}: ObjectiveDrawerContentSubtitleProps) => {
  return <StyledTypography>{subtitle}</StyledTypography>;
};
