//Material UI
import { Stack } from '@mui/system';
import { Box } from '@mui/material';
//Components
import { PageHeaderLeft } from './PageHeaderLeft';
import { PageHeaderRight } from './PageHeaderRight';
import { DividerHorizontal } from '../Reusable/Dividers/DividerHorizontal';

export const PageHeader = () => {
  return (
    <Box sx={{ position: 'sticky', top: 0, background: '#fff', zIndex: 1000 }}>
      <Stack
        direction={'row'}
        sx={{
          justifyContent: 'space-between',
          padding: '30px 50px 30px 0px',
          borderBottom: '0.5px solid rgba(255,255,255,0.5)',
        }}
      >
        <PageHeaderLeft />
        <PageHeaderRight />
      </Stack>
      <DividerHorizontal />
    </Box>
  );
};
