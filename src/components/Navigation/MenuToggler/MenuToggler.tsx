//Material UI
import { ListItemIcon, ListItemButton, ListItem } from '@mui/material';
import { styled } from '@mui/system';
//Media
import { ReactComponent as Roundrush } from '../../../assets/icons/RoundrushIcon.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';

interface MenuTogglerProps {
  isDrawerOpen: boolean;
  handleDrawer: () => void;
}

const StyledItemButton = styled(ListItemButton)((isDrawerOpen) => ({
  display: 'flex',
  justifyContent: isDrawerOpen ? 'initial' : 'space-between',
  padding: '14px 24px',
  gap: isDrawerOpen ? '12px' : 'auto',
}));

const StyledListItemIcon = styled(ListItemIcon)((isDrawerOpen) => ({
  minWidth: 'auto',
  marginLeft: isDrawerOpen ? 'auto' : '0px',
}));

export const MenuToggler: React.FC<MenuTogglerProps> = ({
  isDrawerOpen,
  handleDrawer,
}) => {
  return (
    <ListItem sx={{ padding: '0px' }}>
      <StyledItemButton>
        <StyledListItemIcon>
          <Menu onClick={handleDrawer} />
        </StyledListItemIcon>
        {isDrawerOpen ? (
          <ListItemIcon sx={{ minWidth: 'auto', position: 'absolute' }}>
            <Roundrush />
          </ListItemIcon>
        ) : (
          <></>
        )}
      </StyledItemButton>
    </ListItem>
  );
};
