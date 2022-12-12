//Material UI
import { Stack } from '@mui/material';
//Components
import { Navigation } from '../../components/Drawers/Navigation/Navigation';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ObjectiveDrawer } from '../../components/Drawers/ObjectiveDrawer/ObjectiveDrawer';
import { ObjectivesLayout } from '../../components/Objectives/ObjectivesLayout/ObjectivesLayout';
import { ObjectivesHeader } from '../../components/Objectives/ObjectivesHeader/ObjectivesHeader';
import { ObjectivesTable } from '../../components/Objectives/ObjectivesTable/ObjectivesTable';
import { PageLayout } from '../../components/Reusable/PageLayout/PageLayout';
import { PageContent } from '../../components/Reusable/PageContent/PageContent';

export const ProjectPage: React.FC = () => {
  return (
    <PageLayout>
      <Navigation />
      <PageContent>
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
      </PageContent>
    </PageLayout>
  );
};
