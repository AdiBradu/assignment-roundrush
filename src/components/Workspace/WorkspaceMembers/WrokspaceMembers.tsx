//Material UI
import { styled } from '@mui/system';
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Chip,
} from '@mui/material';
//Media
import Person from '../../../assets/images/ProfilePictureAdrianBradu.png';
import { ReactComponent as More } from '../../../assets/icons/more_horizontal.svg';
//Redux
import { useAppSelector } from '../../../redux/hooks/hooks';

const StyledTitle = styled(Typography)(() => ({
  marginBottom: '40px',
  color: '#31394E',
  fontFamily: 'Rubik',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '28x',
}));

const StyledTableCell = styled(TableCell)(() => ({
  color: 'rgba(49, 57, 78, 0.5)',
  textTransform: 'uppercase',
  borderBottom: 0,
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: '20px',
  height: '20px',
}));

export const WrokspaceMembers: React.FC = () => {
  const { users } = useAppSelector((state) => state.user);

  function createData(
    image: string,
    name: string,
    isOwner: boolean,
    email: string,
    status: boolean,
    action: boolean,
  ) {
    return { image, name, isOwner, email, status, action };
  }

  const rows = [
    createData(
      '/public/images/ProfilePictureAdrianBradu.png',
      'Adrian Bradu',
      true,
      'adrian.bradu@gmail.com',
      true,
      true,
    ),
  ].concat(
    users.map((user) =>
      createData(
        '/public/images/ProfilePictureAdrianBradu.png',
        user.name,
        false,
        user.email,
        Math.random() < 0.7,
        true,
      ),
    ),
  );

  return (
    <Box sx={{ padding: '0px 50px', width: '85%' }}>
      <Stack sx={{ height: '100%' }}>
        <StyledTitle>Users on plan</StyledTitle>
        <TableContainer sx={{ maxHeight: '100%' }} component={Paper}>
          <Table stickyHeader sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: 0 }}>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    opacity: row.status ? 1 : 0.5,
                    backgroundColor: row.status ? 'transparent' : '#EAEBED',
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Stack flexDirection={'row'} sx={{ alignItems: 'center' }}>
                      <StyledAvatar src={Person} />
                      <Typography variant="tableCellName">{row.name}</Typography>
                      {row.isOwner ? <Chip variant="owner" label="OWNER" /> : <></>}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="tableCellEmail">{row.email}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    {row.status ? (
                      <Typography variant="tableCellStatus" sx={{ color: '#29C293' }}>
                        Active
                      </Typography>
                    ) : (
                      <Typography variant="tableCellStatus" sx={{ color: '#FD5461' }}>
                        Inactive
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <More />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
};
