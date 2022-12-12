//Material UI
import { ListItemButton } from '@mui/material';
import { styled } from '@mui/system';

interface StyledListItemButtonProps {
  isDrawerOpen: boolean;
  children: JSX.Element | JSX.Element[];
}

const Button = styled(ListItemButton, {
  shouldForwardProp: (props) => props !== 'isDrawerOpen',
})<{ isDrawerOpen: boolean }>(({ isDrawerOpen }) => ({
  justifyContent: isDrawerOpen ? 'initial' : 'center',
  padding: '14px 24px',
  gap: isDrawerOpen ? '12px' : '0px',
  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
}));

export const StyledListItemButton: React.FC<StyledListItemButtonProps> = ({
  children,
}) => {
  return <Button isDrawerOpen>{children}</Button>;
};
