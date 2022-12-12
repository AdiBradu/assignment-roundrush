//Material UI
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
//Components
import { InputSearch } from '../../Inputs/InputSearch/InputSearch';
//Media
import { ReactComponent as IconRightMultiple } from '../../../assets/icons/iconRightMultiple.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg';

const StyledStack = styled(Stack)(() => ({
  gap: '50px',
  alignItems: 'center',
}));

export const ObjectivesHeaderLeft = () => {
  return (
    <StyledStack flexDirection={'row'}>
      <InputSearch />
      <Stack flexDirection={'row'} sx={{ gap: '24px' }}>
        <IconRightMultiple />
        <ArrowUp />
      </Stack>
    </StyledStack>
  );
};
