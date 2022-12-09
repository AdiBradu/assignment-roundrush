//Styles
import { customStyles } from '../../styles/styles';
//Components
import { Navigation } from '../../components/Drawers/Navigation/Navigation';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { DashboarFavoriteProjects } from '../../components/Dashboard/DashboardFavoriteProjects/DashboarFavoriteProjects';
import { DashboardProjectSummary } from '../../components/Dashboard//DashboardProjectSummary/DashboardProjectSummary';
//Material UI
import { Stack, Box } from '@mui/system';
import { Divider } from '@mui/material';
//Hardcoded data
import rows from '../../data/projectTableRows';

function DashboardPage() {
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

          <Box sx={{ height: '100%', position: 'relative' }}>
            <Stack
              direction={'row'}
              divider={
                <Divider
                  orientation="vertical"
                  sx={customStyles.stylesVertticalDivider}
                />
              }
              sx={{ height: '100%', position: 'relative' }}
            >
              <DashboarFavoriteProjects />
              <DashboardProjectSummary rows={rows} />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default DashboardPage;
