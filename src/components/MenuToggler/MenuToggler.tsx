//Material UI
import { ListItemIcon, ListItemButton, ListItem } from '@mui/material';
//Media
import { ReactComponent as Roundrush } from '../../assets/icons/RoundrushIcon.svg';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';

interface MenuTogglerProps {
  isDrawerOpen: boolean;
  handleDrawer: () => void;
}

export const MenuToggler = ({
  isDrawerOpen,
  handleDrawer,
}: MenuTogglerProps) => {
  return (
    <ListItem sx={{ padding: '0px' }}>
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: isDrawerOpen ? 'initial' : 'space-between',
          padding: '14px 24px',
          gap: isDrawerOpen ? '12px' : 'auto',
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
  );
};
