import styles from './WorkspacePage.module.css';
import { Navigation } from '../../components/Navigation/Navigation';
import Box from '@mui/material/Box';
import { WorkspaceInfo } from '../../components/Workspace/WorkspaceInfo/WorkspaceInfo';
import { WorkspaceMenu } from '../../components/Workspace/WorkspaceMenu/WorkspaceMenu';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Stack } from '@mui/system';
import { Divider } from '@mui/material';

function WorkspacePage() {
  return (
    <div className={styles.page}>
      <Navigation />
      <Box sx={{ background: '#fff', width: '100%', height: '100%' }}>
        <Stack
          divider={
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ background: 'rgba(255,255,255,0.5)', height: '0.5px' }}
            />
          }
          sx={{ height: '100%' }}
        >
          <PageHeader />

          <Box sx={{ height: '100%', marginTop: '53px' }}>
            <Stack
              direction={'row'}
              divider={
                <Divider
                  orientation="vertical"
                  sx={{ background: 'rgba(255,255,255,0.5)', height: '0.5px' }}
                />
              }
              sx={{ height: '100%' }}
            >
              <WorkspaceMenu />
              <WorkspaceInfo />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default WorkspacePage;
