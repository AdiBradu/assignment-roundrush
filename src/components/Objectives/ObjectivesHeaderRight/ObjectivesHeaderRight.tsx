//Material UI
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
//Components
import { ButtonMilestones } from '../../Buttons/ButtonMilestones/ButtonMilestones';
import { ButtonRequirements } from '../../Buttons/ButtonRequirements/ButtonRequirements';

const StyledStack = styled(Stack)(() => ({
  gap: '16px',
  alignItems: 'center',
  marginRight: '16px',
}));

export const ObjectivesHeaderRight = () => {
  return (
    <StyledStack flexDirection={'row'}>
      <ButtonMilestones />
      <ButtonRequirements />
    </StyledStack>
  );
};
