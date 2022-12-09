import React, { useState } from 'react';
//Components
import { MenuToggler } from '../../MenuToggler/MenuToggler';
//Material UI
import { Drawer, Box } from '@mui/material';
//Redux
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { reset } from '../../../redux/features/auth/authSlice';
//Hardcoded data
import theme from '../../../styles/themeCustomization';

interface ObjectiveDrawerProps {
  isDrawerOpen: boolean;
}

const drawerWidth = '200px';

export const ObjectiveDrawer = ({ isDrawerOpen }: ObjectiveDrawerProps) => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{ width: isDrawerOpen ? drawerWidth : 0, height: '100%' }}
      open={isDrawerOpen}
      PaperProps={{
        sx: {
          width: isDrawerOpen ? drawerWidth : 0,
          background: '#fff',
          elevation: 0,

          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    ></Drawer>
  );
};
