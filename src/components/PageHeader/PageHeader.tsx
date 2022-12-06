import React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as Only } from '../../assets/icons/only.svg';

export const PageHeader = () => {
  return (
    <Box sx={{ padding: '30px 50px' }}>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
        <Typography variant="pageheading" color={'#31394E'}>
          Space settings
        </Typography>
        <Box>
          <Stack direction={'row'} sx={{ gap: '24px', alignItems: 'center' }}>
            <Bell />
            <Only />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
