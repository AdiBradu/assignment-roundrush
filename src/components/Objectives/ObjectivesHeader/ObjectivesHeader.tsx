//Material UI
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
//Components
import { ObjectivesHeaderLeft } from '../ObjectivesHeaderLeft/ObjectivesHeaderLeft';
import { ObjectivesHeaderRight } from '../ObjectivesHeaderRight/ObjectivesHeaderRight';

const StyledStack = styled(Stack)(() => ({
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '50px',
}));

export const ObjectivesHeader: React.FC = () => {
  return (
    <StyledStack flexDirection={'row'}>
      <ObjectivesHeaderLeft />
      <ObjectivesHeaderRight />
    </StyledStack>
  );
};
