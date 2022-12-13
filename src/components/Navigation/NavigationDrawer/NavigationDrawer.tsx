import { useState } from 'react';
//Components
import { MenuToggler } from '../MenuToggler/MenuToggler';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { NavigationBottomItems } from '../NavigationBottomItems/NavigationBottomItems';
import { TeamsAccordion } from '../TeamsAccordion/TeamsAccordion';
import { DividerDrawer } from '../../Reusable/Dividers/DividerDrawer';
//Material UI
import { Drawer, List, Stack } from '@mui/material';
import { styled, Theme, CSSObject } from '@mui/material/styles';
//Redux
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { reset } from '../../../redux/features/auth/authSlice';
//Hardcoded data
import { menuItemsTop } from '../../../data/menuItemsTop';

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MyDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const StyledStack = styled(Stack)(() => ({
  justifyContent: 'space-between',
  height: '100%',
}));

export const NavigationDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    dispatch(reset());
  };

  return (
    <MyDrawer variant="permanent" open={isDrawerOpen}>
      <List>
        <MenuToggler isDrawerOpen={isDrawerOpen} handleDrawer={handleDrawer} />
        {menuItemsTop.map((item) => (
          <NavigationItem
            key={item.text}
            isDrawerOpen={isDrawerOpen}
            text={item.text}
            logo={item.logo}
            route={item.route}
          />
        ))}
      </List>

      <DividerDrawer />

      <StyledStack>
        <TeamsAccordion isDrawerOpen={isDrawerOpen} />
        <NavigationBottomItems isDrawerOpen={isDrawerOpen} handleLogout={handleLogout} />
      </StyledStack>
    </MyDrawer>
  );
};