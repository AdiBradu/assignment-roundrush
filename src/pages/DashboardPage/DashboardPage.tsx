//Material UI
import { Box, Stack } from '@mui/material';
//Components
import { NavigationDrawer } from '../../components/Navigation/NavigationDrawer/NavigationDrawer';
import { PageHeader } from '../../components/Reusable/PageHeader/PageHeader';
import { DashboarFavoriteProjects } from '../../components/Dashboard/DashboardFavoriteProjects/DashboarFavoriteProjects';
import { DashboardProjectSummary } from '../../components/Dashboard//DashboardProjectSummary/DashboardProjectSummary';
import { DividerVertical } from '../../components/Reusable/Dividers/DividerVertical';
import { PageLayout } from '../../components/Reusable/PageLayout/PageLayout';
import { PageContent } from '../../components/Reusable/PageContent/PageContent';
//Hardcoded data
import rows from '../../data/projectTableRows';

export const DashboardPage: React.FC = () => {
  return (
    <PageLayout>
      <NavigationDrawer />

      <PageContent>
        <Stack flexDirection={'column'} sx={{ height: '100%' }}>
          <PageHeader />

          <Box sx={{ height: '100%', position: 'relative' }}>
            <Stack
              direction={'row'}
              divider={<DividerVertical />}
              sx={{ height: '100%', position: 'relative' }}
            >
              <DashboarFavoriteProjects />
              <DashboardProjectSummary rows={rows} />
            </Stack>
          </Box>
        </Stack>
      </PageContent>
    </PageLayout>
  );
};
