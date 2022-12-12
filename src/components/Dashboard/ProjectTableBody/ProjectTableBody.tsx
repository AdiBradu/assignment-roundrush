//Material UI
import { Typography, TableBody, TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/system';
//Types
import { ProjectTableRow } from '../../../types/types';

interface ProjectTableBodyProps {
  data: ProjectTableRow[];
}

const StyledCell = styled(TableCell)(() => ({
  padding: 0,
  lineHeight: '100%',
}));

const StyledLastCell = styled(TableCell)(() => ({
  padding: 0,
  lineHeight: '100%',
  textAlign: 'right',
}));

export const ProjectTableBody: React.FC<ProjectTableBodyProps> = ({ data }) => {
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
          <StyledCell>{el.priority}</StyledCell>
          <StyledCell>{el.issue}</StyledCell>
          <StyledCell>
            <Typography variant="tableRowId">{el.id}</Typography>
          </StyledCell>
          <StyledCell>
            <Typography variant="tableRowDescription">{el.description}</Typography>
          </StyledCell>
          <StyledLastCell>{el.label}</StyledLastCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
