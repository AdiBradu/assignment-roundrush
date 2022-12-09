//Material UI
import { Button, Typography } from '@mui/material';
//Media
import { ReactComponent as Arrow } from '../../../assets/icons/arrowGoToProject.svg';

export const ButtonGoToProject = () => {
  return (
    <Button variant="text" endIcon={<Arrow />}>
      <Typography
        variant="goToProject"
        sx={{ color: '#838895', textTransform: 'none' }}
      >
        Go to the project
      </Typography>
    </Button>
  );
};
