//Material UI
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
//Router
import { useLocation } from 'react-router-dom';
//Media
import { ReactComponent as Conference } from '../../../assets/icons/conference.svg';
//components
import { ButtonIcon } from '../../Buttons/ButtonIcon/ButtonIcon';

export const PageHeaderLeft: React.FC = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.includes('/projects') ? true : false;

  return (
    <Stack flexDirection={'row'} sx={{ gap: '24px' }}>
      <Typography variant="pageheading">{location.state?.data}</Typography>
      {isProjectPage ? <ButtonIcon icon={<Conference />} /> : <></>}
    </Stack>
  );
};
