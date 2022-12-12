//Material UI
import { TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/system';
//Redux
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hooks';
import { openDrawer } from '../../../redux/features/drawer/drawerSlice';
//Components
import { ObjectivesTablePriority } from '../ObjectivesTablePriority/ObjectivesTablePriority';
import { ObjectivesTableStatus } from '../ObjectivesTableStatus/ObjectivesTableStatus';
import { ObjectivesTableDueDate } from '../ObjectivesTableDueDate/ObjectivesTableDueDate';
import { ObjectivesTableAssignees } from '../ObjectivesTableAssignees/ObjectivesTableAssignees';
//Hardcoded data
import { objectives } from '../../../data/objectives';
//Utilities
import { getRandomDate } from '../../../utils/utils';

const StyledRow = styled(TableRow)(() => ({
  '&:hover': {
    cursor: 'pointer',
  },
  '&:nth-child(9)': {
    backgroundColor: '#CEF2D8',
  },
  '&:nth-child(10)': {
    backgroundColor: '#CEF2D8',
  },
}));

const StyledNameCell = styled(TableCell)(() => ({
  fontWeight: 400,
  color: '#31394E',
  fontFamily: 'Rubik',
  textTransform: 'capitalize',
  fontSize: '14px',
  lineHeight: '17px',
  width: '100%',
  padding: '14px',
}));

const StyledRestCell = styled(TableCell)(() => ({
  fontWeight: 400,
  color: '#31394E',
  textTransform: 'uppercase',
  fontSize: '14px',
  lineHeight: '17px',
  whiteSpace: 'nowrap',
  padding: '14px',
  '&:last-child': {
    paddingRight: '0px',
  },
}));

export const ObjectivesTableBody = () => {
  const rows = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(openDrawer());
  };

  return (
    <TableBody>
      {rows.map((row, index) => (
        <StyledRow key={row.name} onClick={handleOnClick}>
          <StyledNameCell component="th" scope="row">
            {row.name}
          </StyledNameCell>
          <StyledRestCell align="center">
            <ObjectivesTablePriority
              priority={objectives[index].priority}
              color={objectives[index].color}
            />
          </StyledRestCell>
          <StyledRestCell align="center">
            <ObjectivesTableStatus priority={objectives[index].priority} />
          </StyledRestCell>
          <StyledRestCell align="center">
            <ObjectivesTableAssignees />
          </StyledRestCell>
          <StyledRestCell align="center">
            <ObjectivesTableDueDate
              date={
                objectives[index].checkmarks &&
                getRandomDate().toLocaleDateString('en-US')
              }
            />
          </StyledRestCell>
          <StyledRestCell align="center">
            <ObjectivesTableDueDate
              date={
                objectives[index].checkmarks && objectives[index].checkmarks
              }
            />
          </StyledRestCell>
        </StyledRow>
      ))}
    </TableBody>
  );
};
