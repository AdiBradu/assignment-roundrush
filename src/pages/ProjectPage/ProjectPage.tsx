import React, { useState } from 'react';
//Material UI
import { Stack, Box } from '@mui/system';
import { Divider } from '@mui/material';
//Components
import { Navigation } from '../../components/Drawers/Navigation/Navigation';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ObjectiveDrawer } from '../../components/Drawers/ObjectiveDrawer/ObjectiveDrawer';

const ProjectPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleIsDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <Navigation />
      <Box
        sx={{
          background: '#fff',
          width: '100%',
          height: '100%',
          position: 'relative',
          paddingLeft: '50px',
        }}
      >
        <Stack flexDirection={'column'} sx={{ height: '100%' }}>
          <PageHeader />
          <Box
            sx={{
              display: 'flex',
              background: '#424242',
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <Box
              sx={{ width: '100%', height: '24px', background: '#000' }}
              onClick={handleIsDrawerOpen}
            ></Box>
            <ObjectiveDrawer isDrawerOpen={isDrawerOpen} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectPage;
