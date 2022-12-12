import { useEffect, useState } from 'react';
//Material UI
import { Typography, Stack, Box } from '@mui/material';
import { ButtonGoToProject } from '../../Buttons/ButtonGoToProject/ButtonGoToProject';
import { styled } from '@mui/system';
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

export const DashboardProjectSummary: React.FC<DashboardProjectSummaryProps> = ({
  rows,
}) => {
  const id = useAppSelector((state) => state.project.user?.company.bs);
  const users = useAppSelector((state) => state.user.users);
  const [project, setProject] = useState(users[0].company.bs);

  useEffect(() => {
    if (id) {
      setProject(id);
    }
  }, [id]);

  const StyledBox = styled(Box)(() => ({
    width: '40%',
    padding: '40px 50px 40px 40px',
  }));

  const StyledStack = styled(Stack)(() => ({
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12px',
    marginBottom: '50px',
  }));

  return (
    <StyledBox>
      <StyledStack flexDirection={'row'}>
        <Typography variant="projectTitle">{project}</Typography>
        <Link to={`/projects/${id}`} state={{ data: 'Objectives' }}>
          <ButtonGoToProject />
        </Link>
      </StyledStack>
      <Stack sx={{ gap: '30px' }}>
        <TableProject rows={rows} tableTitle={'Todos'} />
        <TableProject rows={rows} tableTitle={'Reviews Pending'} />
      </Stack>
    </StyledBox>
  );
};
