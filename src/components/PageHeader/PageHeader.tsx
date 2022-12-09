//Material UI
import { Stack } from '@mui/system';
import { Typography, Box, Divider } from '@mui/material';
//Media
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as Only } from '../../assets/icons/only.svg';
import { ReactComponent as OnlyYellow } from '../../assets/icons/onlyyellow.svg';
import { ReactComponent as Conference } from '../../assets/icons/conference.svg';

//Router
import { useLocation } from 'react-router-dom';

export const PageHeader = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.includes('/projects') ? true : false;

  return (
    <Box sx={{ position: 'sticky', top: 0, background: '#fff', zIndex: 1000 }}>
      <Stack
        direction={'row'}
        sx={{
          justifyContent: 'space-between',
          padding: '30px 50px 30px 0px',
          borderBottom: '0.5px solid rgba(255,255,255,0.5)',
        }}
      >
        <Stack sx={{ gap: '24px', flexDirection: 'row' }}>
          <Typography variant="pageheading">{location.state?.data}</Typography>
          <Conference />
        </Stack>

        <Box>
          <Stack direction={'row'} sx={{ gap: '24px', alignItems: 'center' }}>
            {isProjectPage ? <OnlyYellow /> : <Bell />}
            <Only />
          </Stack>
        </Box>
      </Stack>
      <Divider
        orientation="horizontal"
        sx={{ height: '0.5px', background: 'rgba(255,255,255,0.5)' }}
      />
    </Box>
  );
};
