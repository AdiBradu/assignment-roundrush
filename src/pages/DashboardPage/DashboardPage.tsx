//Material UI
import { Box, Stack } from '@mui/material';
//Components
import { Navigation } from '../../components/Drawers/Navigation/Navigation';
import { PageHeader } from '../../components/PageHeader/PageHeader';
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
      <Navigation />

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
