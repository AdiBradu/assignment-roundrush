//Components
import { ObjectivesTableHeader } from '../ObjectivesTableHeader/ObjectivesTableHeader';
import { ObjectivesTableBody } from '../ObjectivesTableBody/ObjectivesTableBody';
//Material UI
import { Table, TableContainer, Paper } from '@mui/material';

export const ObjectivesTable: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'auto' }} aria-label="simple table">
        <ObjectivesTableHeader />
        <ObjectivesTableBody />
      </Table>
    </TableContainer>
  );
};
