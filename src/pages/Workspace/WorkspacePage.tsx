//Components
import { NavigationDrawer } from '../../components/Navigation/NavigationDrawer/NavigationDrawer';
import { WorkspaceInfo } from '../../components/Workspace/WorkspaceInfo/WorkspaceInfo';
import { WorkspaceMenu } from '../../components/Workspace/WorkspaceMenu/WorkspaceMenu';
import { WrokspaceMembers } from '../../components/Workspace/WorkspaceMembers/WrokspaceMembers';
import { PageHeader } from '../../components/Reusable/PageHeader/PageHeader';
import { PageFooter } from '../../components/Reusable/PageFooter/PageFooter';
import { DividerVertical } from '../../components/Reusable/Dividers/DividerVertical';
import { PageLayout } from '../../components/Reusable/PageLayout/PageLayout';
import { PageContent } from '../../components/Reusable/PageContent/PageContent';
//Material UI
import { Stack, Box } from '@mui/system';
//Router
import { useLocation } from 'react-router-dom';

export const WorkspacePage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

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
              sx={{ height: '100%', position: 'relative', marginTop: '53px' }}
            >
              <WorkspaceMenu />
              {pathname === '/workspace/info' ? <WorkspaceInfo /> : <WrokspaceMembers />}
            </Stack>
          </Box>
          <PageFooter />
        </Stack>
      </PageContent>
    </PageLayout>
  );
};
