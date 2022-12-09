//Material UI
import { Typography, TableBody, TableCell, TableRow } from '@mui/material';
//Types
import { ProjectTableRow } from '../../../types/types';

interface ProjectTableBodyProps {
  data: ProjectTableRow[];
}

export const ProjectTableBody = ({ data }: ProjectTableBodyProps) => {
  const cellStyles = {
    padding: 0,
    lineHeight: '100%',
  };

  const lastCell = {
    padding: 0,
    lineHeight: '100%',
    textAlign: 'right',
  };

  return (
    <TableBody>
      {data.map((el: ProjectTableRow) => (
        <TableRow
          key={el.description}
          sx={{
            height: '36px',
            width: '100%',
          }}
        >
          <TableCell sx={cellStyles}>{el.priority}</TableCell>
          <TableCell sx={cellStyles}>{el.issue}</TableCell>
          <TableCell sx={cellStyles}>
            <Typography variant="tableRowId">{el.id}</Typography>
          </TableCell>
          <TableCell sx={cellStyles}>
            <Typography variant="tableRowDescription">
              {el.description}
            </Typography>
          </TableCell>
          <TableCell sx={lastCell}>{el.label}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
