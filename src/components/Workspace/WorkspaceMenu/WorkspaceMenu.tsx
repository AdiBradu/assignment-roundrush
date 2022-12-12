import { useLocation, Link } from 'react-router-dom';
//Material UI
import { styled } from '@mui/system';
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

const StyledBox = styled(Box)(() => ({
  padding: '0px 50px 0px 0px',
  height: '100%',
  width: '15%',
  position: 'sticky',
  top: 0,
}));

const ListTextHeader = styled(ListItemText)(() => ({
  color: '#4C84FF',
  fontFamily: 'Ruik',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  textTransform: 'uppercase',
}));

const StyledListItem = styled(ListItem)(() => ({
  padding: '0px',
  marginTop: '24px',
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
  justifyContent: 'center',
  padding: 0,
  gap: '23px',
}));

export const WorkspaceMenu: React.FC = () => {
  const location = useLocation();

  return (
    <StyledBox>
      <List>
        <ListItem sx={{ padding: '0px', gap: '10px' }}>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Settings />
          </ListItemIcon>

          <ListTextHeader primary={'space settings'} />
        </ListItem>

        <StyledListItem>
          <Link to="/workspace/info" state={{ data: 'Space settings' }}>
            <StyledListItemButton>
              <ListItemIcon sx={{ minWidth: 'auto' }}></ListItemIcon>
              <ListItemText
                primary={'Info'}
                sx={{
                  color: location.pathname.includes('info') ? '#4C84FF' : '#838895',
                }}
              />
            </StyledListItemButton>
          </Link>
        </StyledListItem>

        <StyledListItem>
          <Link to="/workspace/members" state={{ data: 'Space settings' }}>
            <StyledListItemButton>
              <ListItemIcon sx={{ minWidth: 'auto' }}></ListItemIcon>
              <ListItemText
                primary={'Members'}
                sx={{
                  color: location.pathname.includes('members') ? '#4C84FF' : '#838895',
                }}
              />
            </StyledListItemButton>
          </Link>
        </StyledListItem>
      </List>
    </StyledBox>
  );
};
