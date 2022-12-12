//Material UI
import { Stack, Box } from '@mui/system';
//Components
import { Navigation } from '../../components/Drawers/Navigation/Navigation';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ObjectiveDrawer } from '../../components/Drawers/ObjectiveDrawer/ObjectiveDrawer';
import { ObjectivesLayout } from '../../components/Objectives/ObjectivesLayout/ObjectivesLayout';
import { ObjectivesHeader } from '../../components/Objectives/ObjectivesHeader/ObjectivesHeader';
import { ObjectivesTable } from '../../components/Objectives/ObjectivesTable/ObjectivesTable';

const ProjectPage = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <Navigation />
      <Box
        sx={{
          background: '#fff',
          width: '100%',
          height: '100%',
          position: 'relative',
          paddingLeft: '50px',
        }}
      >
        <Stack flexDirection={'column'} sx={{ height: '100%' }}>
          <PageHeader />
          <ObjectivesLayout>
            <Stack flexDirection={'column'} sx={{ width: '100%', gap: '32px' }}>
              <ObjectivesHeader />
              <ObjectivesTable />
            </Stack>
            <ObjectiveDrawer />
          </ObjectivesLayout>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectPage;
