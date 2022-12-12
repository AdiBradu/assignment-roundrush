//Material UI
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
//Components
import { PageHeaderLeft } from './PageHeaderLeft';
import { PageHeaderRight } from './PageHeaderRight';
import { DividerHorizontal } from '../Reusable/Dividers/DividerHorizontal';

const StyledBox = styled(Box)(() => ({
  position: 'sticky',
  top: 0,
  background: '#fff',
  zIndex: 1000,
}));

const SyledStack = styled(Stack)(() => ({
  justifyContent: 'space-between',
  padding: '30px 50px 30px 0px',
  borderBottom: '0.5px solid rgba(255,255,255,0.5)',
}));

export const PageHeader: React.FC = () => {
  return (
    <StyledBox>
      <SyledStack flexDirection={'row'}>
        <PageHeaderLeft />
        <PageHeaderRight />
      </SyledStack>
      <DividerHorizontal />
    </StyledBox>
  );
};
