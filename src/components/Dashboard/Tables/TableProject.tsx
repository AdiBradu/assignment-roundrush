//Material UI
import {
  Table,
  TableContainer,
  Paper,
  Stack,
  Typography,
  Box,
} from '@mui/material';
//Components
import { ProjectTableHeader } from '../ProjectTableHeader/ProjectTableHeader';
import { ProjectTableBody } from '../ProjectTableBody/ProjectTableBody';
//Types
import { ProjectTableRow } from '../../../types/types';

interface TableProjectProps {
  tableTitle: string;
  rows: ProjectTableRow[];
}

export const TableProject = ({ rows, tableTitle }: TableProjectProps) => {
  return (
    <Stack sx={{ gap: '24px' }}>
      <Stack flexDirection={'row'} sx={{ gap: '16px', alignItems: 'center' }}>
        <Typography variant="sectionTitle">{tableTitle}</Typography>
        <Box
          sx={{
            background: 'rgb(0, 121, 255, 0.25)',
            borderRadius: '8px',
            padding: '0px 9px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="tasksNumber" sx={{ color: '#0079FF' }}>
            12
          </Typography>
        </Box>
      </Stack>
      <TableContainer component={Paper} sx={{}}>
        <Table sx={{ minWidth: 'auto' }} aria-label="simple table">
          <ProjectTableHeader />
          <ProjectTableBody data={rows} />
        </Table>
      </TableContainer>
    </Stack>
  );
};
