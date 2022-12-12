//Material UI
import { Drawer, Stack } from '@mui/material';
import { styled, Theme, CSSObject } from '@mui/material/styles';
//Components
import { ObjectiveDrawerController } from './ObjectiveDrawerController';
import { DividerHorizontal } from '../../Reusable/Dividers/DividerHorizontal';
import { ObjectiveDrawerContent } from './ObjectiveDrawerContent';
import { ObjectiveDrawerCheckmarks } from './ObjectiveDrawerCheckmarks';
//Redux
import { useAppSelector } from '../../../redux/hooks/hooks';
//Hardcoded data
import theme from '../../../styles/themeCustomization';

const drawerWidth = '500px';

export const ObjectiveDrawer = () => {
  const isDrawerOpen = useAppSelector((state) => state.drawer.isDrawerOpen);

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{ width: isDrawerOpen ? drawerWidth : 0, height: '100%' }}
      open={isDrawerOpen}
      PaperProps={{
        sx: {
          width: isDrawerOpen ? drawerWidth : 0,
          display: isDrawerOpen ? 'flex' : 'none',
          background: '#fff',
          elevation: 0,
          borderTopLeftRadius: '6px',
          borderBottomLeftRadius: '6px',
          padding: 0,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      <Stack flexDirection={'column'}>
        <ObjectiveDrawerController />
        <DividerHorizontal />
        <ObjectiveDrawerContent />
        <ObjectiveDrawerCheckmarks />
      </Stack>
    </Drawer>
  );
};
