//Material UI
import { TableCell, TableHead, TableRow } from '@mui/material';

export const ProjectTableHeader = () => {
  return (
    <TableHead>
      <TableRow
        sx={{
          display: 'none',
        }}
      >
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};
