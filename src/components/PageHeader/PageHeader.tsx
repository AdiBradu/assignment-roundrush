//Material UI
import { Stack } from '@mui/system';
import { Typography, Box, Divider } from '@mui/material';
//Media
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as Only } from '../../assets/icons/only.svg';
//Router
import { useLocation } from 'react-router-dom';

export const PageHeader = () => {
  const location = useLocation();

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
        <Typography variant="pageheading" color={'#31394E'}>
          {location.state?.data}
        </Typography>
        <Box>
          <Stack direction={'row'} sx={{ gap: '24px', alignItems: 'center' }}>
            <Bell />
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
