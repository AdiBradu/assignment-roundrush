//Material UI
//Material UI
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
//Media
import { ReactComponent as Arrow } from '../../../assets/icons/arrowGoToProject.svg';

const StyledTypography = styled(Typography)(() => ({
  textTransform: 'none',
  fontFamily: 'Rubik',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '14.22px',
  color: '#838895',
}));

export const ButtonGoToProject: React.FC = () => {
  return (
    <Button variant="text" endIcon={<Arrow />}>
      <StyledTypography>Go to the project</StyledTypography>
    </Button>
  );
};
