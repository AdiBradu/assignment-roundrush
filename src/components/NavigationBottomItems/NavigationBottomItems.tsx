//Material UI
import { ListItemIcon, ListItem, List, Avatar } from '@mui/material';
import { styled } from '@mui/system';
//Media
import { ReactComponent as Exit } from '../../assets/icons/exit.svg';
import { ReactComponent as Help } from '../../assets/icons/help.svg';
import Person from '../../assets/images/ProfilePictureAdrianBradu.png';
//Components
import { StyledListItemButton } from '../Reusable/StyledListItemButton/StyledListItemButton';

interface NavigationBottomItemsProps {
  isDrawerOpen: boolean;
  handleLogout: () => void;
}

const StyledList = styled(List, {
  shouldForwardProp: (props) => props !== 'isDrawerOpen',
})<{ isDrawerOpen: boolean }>(({ isDrawerOpen }) => ({
  display: 'flex',
  flexDirection: isDrawerOpen ? 'row-reverse' : 'column',
}));

const StyledAvatar = styled(Avatar)(() => ({
  bgcolor: 'red',
  width: '26px',
  height: '26px',
}));

export const NavigationBottomItems: React.FC<NavigationBottomItemsProps> = ({
  isDrawerOpen,
  handleLogout,
}) => {
  return (
    <StyledList isDrawerOpen={isDrawerOpen}>
      <ListItem sx={{ padding: '0px', order: '2' }}>
        <StyledListItemButton isDrawerOpen>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Help />
          </ListItemIcon>
        </StyledListItemButton>
      </ListItem>

      <ListItem sx={{ padding: '0px', order: '1' }}>
        <StyledListItemButton isDrawerOpen>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Exit onClick={handleLogout} />
          </ListItemIcon>
        </StyledListItemButton>
      </ListItem>

      <ListItem sx={{ padding: '0px', order: '3' }}>
        <StyledListItemButton isDrawerOpen>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <StyledAvatar src={Person} />
          </ListItemIcon>
        </StyledListItemButton>
      </ListItem>
    </StyledList>
  );
};
