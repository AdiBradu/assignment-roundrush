//Material UI
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';
//Media
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
//components
import { ButtonIcon } from '../../Buttons/ButtonIcon/ButtonIcon';
//Redux
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { closeDrawer } from '../../../redux/features/drawer/drawerSlice';

const StyledStack = styled(Stack)(() => ({
  width: '100%',
  justifyContent: 'flex-end',
  padding: '13px 24px',
  gap: '24px',
}));

export const ObjectiveDrawerController: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(closeDrawer());
  };

  return (
    <StyledStack flexDirection={'row'}>
      <Delete />
      <ButtonIcon icon={<Close />} onClick={handleOnClick} />
    </StyledStack>
  );
};
