//Material UI
import { Stack } from '@mui/material';
//Components
import { NavigationDrawer } from '../../components/Navigation/NavigationDrawer/NavigationDrawer';
import { PageHeader } from '../../components/Reusable/PageHeader/PageHeader';
import { ObjectiveDrawer } from '../../components/Navigation/ObjectiveDrawer/ObjectiveDrawer';
import { ObjectivesLayout } from '../../components/Objectives/ObjectivesLayout/ObjectivesLayout';
import { ObjectivesHeader } from '../../components/Objectives/ObjectivesHeader/ObjectivesHeader';
import { ObjectivesTable } from '../../components/Objectives/ObjectivesTable/ObjectivesTable';
import { PageLayout } from '../../components/Reusable/PageLayout/PageLayout';
import { PageContent } from '../../components/Reusable/PageContent/PageContent';

export const ProjectPage: React.FC = () => {
  return (
    <PageLayout>
      <NavigationDrawer />
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
