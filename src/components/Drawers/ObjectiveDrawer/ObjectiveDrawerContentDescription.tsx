//Material UI
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
//Components
import { ObjectiveDrawerContentSubtitle } from './ObjectiveDrawerContentSubtitle';
import { ObjectiveDrawerContentDescriptionBody } from './ObjectiveDrawerContentDescriptionBody';

const StyledStack = styled(Stack)(() => ({
  gap: '14px',
}));

export const ObjectiveDrawerContentDescription: React.FC = () => {
  return (
    <StyledStack flexDirection={'column'}>
      <ObjectiveDrawerContentSubtitle subtitle={'description'} />
      <ObjectiveDrawerContentDescriptionBody
        body={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id consectetur purus. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.'
        }
      />
    </StyledStack>
  );
};
