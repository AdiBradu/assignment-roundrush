import React from 'react';
//Material UI
import {
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Avatar,
} from '@mui/material';
//Media
import { ReactComponent as Exit } from '../../assets/icons/exit.svg';
import { ReactComponent as Help } from '../../assets/icons/help.svg';
import Person from '../../assets/images/ProfilePictureAdrianBradu.png';

interface NavigationBottomItemsProps {
  isDrawerOpen: boolean;
  handleLogout: () => void;
}

export const NavigationBottomItems = ({
  isDrawerOpen,
  handleLogout,
}: NavigationBottomItemsProps) => {
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: isDrawerOpen ? 'row-reverse' : 'column',
      }}
    >
      <ListItem sx={{ padding: '0px', order: '2' }}>
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

      <ListItem sx={{ padding: '0px', order: '1' }}>
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

      <ListItem sx={{ padding: '0px', order: '3' }}>
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
    </List>
  );
};
