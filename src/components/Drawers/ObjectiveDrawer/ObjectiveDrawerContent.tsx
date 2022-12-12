//Material UI
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
//Components
import { ObjectiveDrawerContentTitle } from './ObjectiveDrawerContentTitle';
import { ObjectiveDrawerContentDescription } from './ObjectiveDrawerContentDescription';
import { ObjectiveDrawerContentSubtitle } from './ObjectiveDrawerContentSubtitle';
import { ObjectiveDrawerContentSlot } from './ObjectiveDrawerContentSlot';
import { ObjectiveDrawerContentSlotBody } from './ObjectiveDrawerContentSlotBody';
import { ObjectiveDrawerContentChips } from './ObjectiveDrawerContentChips';
//Media
import { ReactComponent as High } from '../../../assets/icons/priority/high.svg';
import { ReactComponent as Folder } from '../../../assets/icons/folder.svg';
//Utils
import { getRandomDate } from '../../../utils/utils';

const StyledStack = styled(Stack)(() => ({
  width: '100%',
  gap: '30px',
  padding: '24px',
}));

export const ObjectiveDrawerContent = () => {
  return (
    <StyledStack flexDirection={'column'}>
      <ObjectiveDrawerContentTitle />
      <ObjectiveDrawerContentDescription />
      <ObjectiveDrawerContentSlot
        labelComponent={<ObjectiveDrawerContentSubtitle subtitle="priority" />}
        dataComponent={
          <ObjectiveDrawerContentSlotBody
            icon={<High />}
            text={'high priority'}
          />
        }
      />
      <ObjectiveDrawerContentSlot
        labelComponent={
          <ObjectiveDrawerContentSubtitle subtitle="subproject" />
        }
        dataComponent={
          <ObjectiveDrawerContentSlotBody icon={<Folder />} text={'Webapp'} />
        }
      />
      <ObjectiveDrawerContentSlot
        labelComponent={<ObjectiveDrawerContentSubtitle subtitle="assignees" />}
        dataComponent={<ObjectiveDrawerContentChips />}
      />
      <ObjectiveDrawerContentSlot
        labelComponent={
          <ObjectiveDrawerContentSubtitle subtitle="linked projects" />
        }
        dataComponent={
          <ObjectiveDrawerContentSlotBody
            text={getRandomDate().toLocaleDateString('en-US')}
          />
        }
      />
      <ObjectiveDrawerContentSlot
        labelComponent={<ObjectiveDrawerContentSubtitle subtitle="due date" />}
        dataComponent={
          <ObjectiveDrawerContentSlotBody
            text={getRandomDate().toLocaleDateString('en-US')}
          />
        }
      />
    </StyledStack>
  );
};
