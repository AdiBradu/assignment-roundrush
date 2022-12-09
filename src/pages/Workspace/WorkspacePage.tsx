//Styles
import styles from './WorkspacePage.module.css';
import { customStyles } from '../../styles/styles';
//Components
import { Navigation } from '../../components/Drawers/Navigation/Navigation';
import { WorkspaceInfo } from '../../components/Workspace/WorkspaceInfo/WorkspaceInfo';
import { WorkspaceMenu } from '../../components/Workspace/WorkspaceMenu/WorkspaceMenu';
import { WrokspaceMembers } from '../../components/Workspace/WorkspaceMembers/WrokspaceMembers';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { PageFooter } from '../../components/PageFooter/PageFooter';
//Material UI
import { Stack, Box } from '@mui/system';
import { Divider } from '@mui/material';
//Router
import { useLocation } from 'react-router-dom';

function WorkspacePage() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={styles.page}>
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
              sx={{ height: '100%', position: 'relative', marginTop: '53px' }}
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
