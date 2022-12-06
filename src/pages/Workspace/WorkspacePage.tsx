import styles from './WorkspacePage.module.css';
import { customStyles } from '../../styles/styles';
import { Navigation } from '../../components/Navigation/Navigation';
import Box from '@mui/material/Box';
import { WorkspaceInfo } from '../../components/Workspace/WorkspaceInfo/WorkspaceInfo';
import { WorkspaceMenu } from '../../components/Workspace/WorkspaceMenu/WorkspaceMenu';
import { WrokspaceMembers } from '../../components/Workspace/WorkspaceMembers/WrokspaceMembers';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { PageFooter } from '../../components/PageFooter/PageFooter';
import { Stack } from '@mui/system';
import { Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';

function WorkspacePage() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={styles.page}>
      <Navigation />
      <Box sx={customStyles.stylesPageBackground}>
        <Stack flexDirection={'column'} sx={{ height: '100%' }}>
          <PageHeader />
          <Divider
            orientation="horizontal"
            flexItem
            sx={customStyles.stylesHorizontalDivider}
          />
          <Box sx={{ height: '100%', marginTop: '53px' }}>
            <Stack
              direction={'row'}
              divider={
                <Divider
                  orientation="vertical"
                  sx={customStyles.stylesVertticalDivider}
                />
              }
              sx={{ height: '100%' }}
            >
              <WorkspaceMenu />
              {pathname === '/workspace/info' ? (
                <WorkspaceInfo />
              ) : (
                <WrokspaceMembers />
              )}
            </Stack>
          </Box>
          <PageFooter />
        </Stack>
      </Box>
    </div>
  );
}

export default WorkspacePage;
