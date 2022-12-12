//Material UI
import { TableHead, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/system';

const StyledNameCell = styled(TableCell)(() => ({
  fontWeight: 500,
  color: 'rgba(49, 57, 78, 0.5)',
  textTransform: 'uppercase',
  fontFamily: 'Rubik',
  fontSize: '14px',
  lineHeight: '18px',
  width: '100%',
  padding: '14px',
  border: 'none',
}));

const StyledRestCell = styled(TableCell)(() => ({
  fontWeight: 500,
  color: 'rgba(49, 57, 78, 0.5)',
  textTransform: 'uppercase',
  fontFamily: 'Rubik',
  fontSize: '14px',
  lineHeight: '18px',
  whiteSpace: 'nowrap',
  padding: '14px',
  border: 'none',
  '&:last-child': {
    paddingRight: '0px',
  },
}));

const StyledRow = styled(TableRow)(() => ({
  height: '30px',
}));

const headerRestCells = [
  'priority',
  'status',
  'assignees',
  'due date',
  'checkmarks',
];

export const ObjectivesTableHeader = () => {
  return (
    <TableHead>
      <StyledRow>
        <StyledNameCell align="left">Name</StyledNameCell>
        {headerRestCells.map((cell) => (
          <StyledRestCell align="center">{cell}</StyledRestCell>
        ))}
      </StyledRow>
    </TableHead>
  );
};
