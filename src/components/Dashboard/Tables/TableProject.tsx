//Material UI
import { Table, TableContainer, Paper, Stack, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
//Components
import { ProjectTableHeader } from '../ProjectTableHeader/ProjectTableHeader';
import { ProjectTableBody } from '../ProjectTableBody/ProjectTableBody';
//Types
import { ProjectTableRow } from '../../../types/types';

interface TableProjectProps {
  tableTitle: string;
  rows: ProjectTableRow[];
}

const StyledBox = styled(Box)(() => ({
  background: 'rgb(0, 121, 255, 0.25)',
  borderRadius: '8px',
  padding: '0px 9px',
  height: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const TableProject: React.FC<TableProjectProps> = ({ rows, tableTitle }) => {
  return (
    <Stack sx={{ gap: '24px' }}>
      <Stack flexDirection={'row'} sx={{ gap: '16px', alignItems: 'center' }}>
        <Typography variant="sectionTitle">{tableTitle}</Typography>
        <StyledBox>
          <Typography variant="tasksNumber">12</Typography>
        </StyledBox>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 'auto' }} aria-label="simple table">
          <ProjectTableHeader />
          <ProjectTableBody data={rows} />
        </Table>
      </TableContainer>
    </Stack>
  );
};
