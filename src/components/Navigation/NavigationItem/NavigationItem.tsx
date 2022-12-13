//Material UI
import { ListItemText, ListItemIcon, ListItemButton, ListItem } from '@mui/material';
import { styled } from '@mui/system';
//Router
import { Link } from 'react-router-dom';

interface NavigationItemProps {
  isDrawerOpen: boolean;
  text: string;
  logo: JSX.Element;
  route: string;
}

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (props) => props !== 'isDrawerOpen',
})<{ isDrawerOpen: boolean }>(({ isDrawerOpen }) => ({
  justifyContent: isDrawerOpen ? 'initial' : 'center',
  padding: '14px 24px',
  gap: isDrawerOpen ? '12px' : '0px',
  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
}));

export const NavigationItem: React.FC<NavigationItemProps> = ({
  isDrawerOpen,
  text,
  logo,
  route,
}) => {
  return (
    <Link to={route} state={{ data: text }}>
      <ListItem key={text} sx={{ padding: '0px' }}>
        <StyledListItemButton isDrawerOpen>
          <ListItemIcon sx={{ minWidth: 'auto' }}>{logo}</ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
        </StyledListItemButton>
      </ListItem>
    </Link>
  );
};
