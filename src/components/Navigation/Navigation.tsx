import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';

import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { ReactComponent as Roundrush } from '../../assets/icons/RoundrushIcon.svg';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
import { ReactComponent as Brotli } from '../../assets/icons/logos-brotli.svg';
import { ReactComponent as Trello } from '../../assets/icons/trello.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';
import { ReactComponent as Member } from '../../assets/icons/member.svg';
import { ReactComponent as Exit } from '../../assets/icons/exit.svg';
import { ReactComponent as Help } from '../../assets/icons/help.svg';

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

const Drawer = styled(MuiDrawer, {
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

export const Navigation = () => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItemsTop = [
    {
      logo: <Brotli />,
      text: 'YellowTech Inc.',
    },
    {
      logo: <Trello />,
      text: 'Personal Board',
    },
    {
      logo: <Home />,
      text: 'Dashboard',
    },
    {
      logo: <Settings />,
      text: 'Space Settings',
    },
  ];

  return (
    <>
      <Drawer
        variant="permanent"
        open={isDrawerOpen}
        sx={{ background: '#31394E' }}
      >
        <List>
          <ListItem sx={{ padding: '0px' }}>
            <ListItemButton
              sx={{
                display: 'flex',
                justifyContent: isDrawerOpen ? 'initial' : 'space-between',
                padding: '14px 24px',
                gap: isDrawerOpen ? '12px' : 'auto',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  marginLeft: isDrawerOpen ? 'auto' : '0px',
                }}
              >
                <Menu onClick={handleDrawer} />
              </ListItemIcon>
              {isDrawerOpen ? (
                <ListItemIcon sx={{ minWidth: 'auto', position: 'absolute' }}>
                  <Roundrush />
                </ListItemIcon>
              ) : (
                <></>
              )}
            </ListItemButton>
          </ListItem>

          {menuItemsTop.map((item) => (
            <ListItem key={item.text} sx={{ padding: '0px' }}>
              <ListItemButton
                sx={{
                  justifyContent: isDrawerOpen ? 'initial' : 'center',
                  padding: '14px 24px',
                  gap: isDrawerOpen ? '12px' : '0px',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  {item.logo}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider
          sx={{
            background: 'rgba(255,255,255,0.5)',
            height: '0.5px',
            margin: '16px 0px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <List>
            <ListItem sx={{ padding: '0px' }}>
              <ListItemButton
                sx={{
                  justifyContent: isDrawerOpen ? 'initial' : 'center',
                  padding: '14px 24px',
                  gap: isDrawerOpen ? '12px' : '0px',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <Member />
                </ListItemIcon>
                <ListItemText
                  primary={'Teams'}
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <Stack direction={isDrawerOpen ? 'row-reverse' : 'column'}>
              <ListItem sx={{ padding: '0px' }}>
                <ListItemButton
                  sx={{
                    justifyContent: isDrawerOpen ? 'initial' : 'center',
                    padding: '14px 24px',
                    gap: isDrawerOpen ? '12px' : '0px',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <Help />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem sx={{ padding: '0px' }}>
                <ListItemButton
                  sx={{
                    justifyContent: isDrawerOpen ? 'initial' : 'center',
                    padding: '14px 24px',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    {' '}
                    <Exit />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ padding: '0px' }}>
                <ListItemButton
                  sx={{
                    justifyContent: isDrawerOpen ? 'initial' : 'center',
                    padding: '14px 24px',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <Avatar
                      sx={{ bgcolor: 'red', width: '26px', height: '26px' }}
                      src={'/public/images/ProfilePictureAdrianBradu.png'}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </Stack>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
