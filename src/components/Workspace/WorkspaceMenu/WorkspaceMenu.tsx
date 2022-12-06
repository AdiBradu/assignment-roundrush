import { useLocation, Link } from 'react-router-dom';
//Material UI
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Box,
} from '@mui/material';
//Media
import { ReactComponent as Settings } from '../../../assets/icons/settingsBlue.svg';

export const WorkspaceMenu = () => {
  const location = useLocation();
  return (
    <Box sx={{ padding: '0px 50px', height: '100%', width: '15%' }}>
      <List>
        <ListItem sx={{ padding: '0px', gap: '10px' }}>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Settings />
          </ListItemIcon>

          <ListItemText
            primary={'space settings'}
            sx={{
              color: '#4C84FF',
              fontFamily: 'Ruik',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              textTransform: 'uppercase',
            }}
          />
        </ListItem>

        <ListItem sx={{ padding: '0px', marginTop: '24px' }}>
          <Link to="/workspace/info">
            <ListItemButton
              sx={{
                justifyContent: 'center',
                padding: 0,
                gap: '23px',
              }}
            >
              <ListItemIcon sx={{ minWidth: 'auto' }}></ListItemIcon>
              <ListItemText
                primary={'Info'}
                sx={{
                  color:
                    location.pathname === '/workspace/info'
                      ? '#4C84FF'
                      : '#838895',
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem sx={{ padding: '0px', marginTop: '24px' }}>
          <Link to="/workspace/members">
            <ListItemButton
              sx={{
                justifyContent: 'center',
                padding: 0,
                gap: '23px',
              }}
            >
              <ListItemIcon sx={{ minWidth: 'auto' }}>{}</ListItemIcon>
              <ListItemText
                primary={'Members'}
                sx={{
                  color:
                    location.pathname === '/workspace/members'
                      ? '#4C84FF'
                      : '#838895',
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
