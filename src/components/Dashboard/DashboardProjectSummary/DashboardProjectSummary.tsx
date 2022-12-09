import { useEffect, useState } from 'react';
//Material UI
import { Stack, Box } from '@mui/system';
import { Typography } from '@mui/material';
import { ButtonGoToProject } from '../../Buttons/ButtonGoToProject/ButtonGoToProject';
//Components
import { TableProject } from '../Tables/TableProject';
//Types
import { ProjectTableRow } from '../../../types/types';
//Router
import { Link } from 'react-router-dom';
//Redux
import { useAppSelector } from '../../../redux/hooks/hooks';
interface DashboardProjectSummaryProps {
  rows: ProjectTableRow[];
}

export const DashboardProjectSummary = ({
  rows,
}: DashboardProjectSummaryProps) => {
  const id = useAppSelector((state) => state.project.user?.company.bs);
  const users = useAppSelector((state) => state.user.users);
  const [project, setProject] = useState(users[0].company.bs);

  useEffect(() => {
    if (id) {
      setProject(id);
    }
  }, [id]);

  return (
    <Box sx={{ width: '40%', padding: '40px 50px 40px 40px' }}>
      <Stack
        flexDirection={'row'}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '12px',
          marginBottom: '50px',
        }}
      >
        <Typography variant="projectTitle">{project}</Typography>
        <Link to={`/projects/${id}`} state={{ data: 'Objectives' }}>
          <ButtonGoToProject />
        </Link>
      </Stack>
      <Stack sx={{ gap: '30px' }}>
        <TableProject rows={rows} tableTitle={'Todos'} />
        <TableProject rows={rows} tableTitle={'Reviews Pending'} />
      </Stack>
    </Box>
  );
};
