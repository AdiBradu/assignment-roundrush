//Material UI
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
//components
import { ObjectiveDrawerCheckmarksHeader } from './ObjectiveDrawerCheckmarksHeader';
import { ObjectiveDrawerCheckmarksList } from './ObjectiveDrawerCheckmarksList';

const StyledLayout = styled(Stack)(() => ({
  width: '100%',
  marginTop: '20px',
}));

export const ObjectiveDrawerCheckmarks: React.FC = () => {
  return (
    <StyledLayout flexDirection={'column'}>
      <ObjectiveDrawerCheckmarksHeader />
      <ObjectiveDrawerCheckmarksList />
    </StyledLayout>
  );
};
