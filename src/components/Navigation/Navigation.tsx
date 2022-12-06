import { useState } from 'react';
//Material UI
import {
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Box,
  Divider,
  Avatar,
  Stack,
} from '@mui/material';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
//Media
import { ReactComponent as Roundrush } from '../../assets/icons/RoundrushIcon.svg';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
import { ReactComponent as Brotli } from '../../assets/icons/logos-brotli.svg';
import { ReactComponent as Trello } from '../../assets/icons/trello.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';
import { ReactComponent as Member } from '../../assets/icons/member.svg';
import { ReactComponent as Exit } from '../../assets/icons/exit.svg';
import { ReactComponent as Help } from '../../assets/icons/help.svg';
import { ReactComponent as ArrowDown } from '../../assets//icons/arrow-down.svg';
import Person from '../../assets/images/ProfilePictureAdrianBradu.png';
//Redux
import { useAppDispatch } from '../../redux/hooks/hooks';
import { reset } from '../../redux/features/auth/authSlice';
//Hardcoded data
import { teams, colors } from '../../data/teams';

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

export const Navigation = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => [dispatch(reset())];

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
      <MyDrawer
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
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDown />}
                  aria-controls="teams"
                >
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
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: isDrawerOpen ? 'flex' : 'none' }}
                >
                  <List>
                    {teams.map((team, index) => (
                      <ListItem sx={{ padding: '8px 0px' }} key={team.name}>
                        <Stack>
                          <ListItemText primary={team.name} />
                          <List>
                            {team.subteams.map((subteam, index) => (
                              <ListItem
                                sx={{ padding: '0px' }}
                                key={subteam + index}
                              >
                                <Stack
                                  flexDirection={'row'}
                                  gap="8px"
                                  alignItems={'center'}
                                >
                                  <Box
                                    sx={{
                                      width: '12px',
                                      height: '12px',
                                      backgroundColor: colors[index],
                                      borderRadius: '3px',
                                    }}
                                  ></Box>
                                  <ListItemText primary={subteam} />
                                </Stack>
                              </ListItem>
                            ))}
                          </List>
                        </Stack>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
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
                    <Exit onClick={handleLogout} />
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
                      src={Person}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </Stack>
          </List>
        </Box>
      </MyDrawer>
    </>
  );
};
