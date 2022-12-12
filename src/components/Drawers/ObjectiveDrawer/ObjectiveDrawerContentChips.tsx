//Mterial UI
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
//Components
import { ObjectiveDrawerContentChip } from '../../Reusable/Chips/ObjectiveDrawerContentChip';
//Hardcoded data
import { assignees } from '../../../data/chips';

const StyledStack = styled(Stack)(() => ({
  gap: '7px',
}));

export const ObjectiveDrawerContentChips: React.FC = () => {
  return (
    <StyledStack flexDirection={'row'}>
      {assignees.map((assignee) => (
        <ObjectiveDrawerContentChip
          fullname={assignee.fullname}
          avatar={assignee.avatar}
        />
      ))}
    </StyledStack>
  );
};
