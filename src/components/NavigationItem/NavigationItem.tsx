//Material UI
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
} from '@mui/material';
//Router
import { Link } from 'react-router-dom';

interface NavigationItemProps {
  isDrawerOpen: boolean;
  text: string;
  logo: JSX.Element;
  route: string;
}

export const NavigationItem = ({
  isDrawerOpen,
  text,
  logo,
  route,
}: NavigationItemProps) => {
  return (
    <ListItem key={text} sx={{ padding: '0px' }}>
      <Link to={route} state={{ data: text }}>
        <ListItemButton
          sx={{
            justifyContent: isDrawerOpen ? 'initial' : 'center',
            padding: '14px 24px',
            gap: isDrawerOpen ? '12px' : '0px',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
          }}
        >
          <ListItemIcon sx={{ minWidth: 'auto' }}>{logo}</ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};
