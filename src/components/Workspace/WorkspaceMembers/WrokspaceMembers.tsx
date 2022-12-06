//Styles
import { customStyles } from '../../../styles/styles';
//Material UI
import { Stack } from '@mui/system';
import {
  Box,
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

export const WrokspaceMembers = () => {
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
    <Box sx={{ padding: '0px 50px', width: '100%' }}>
      <Stack sx={{ height: '100%' }}>
        <Typography
          variant="h6"
          color={'#31394E'}
          sx={{ marginBottom: '51px' }}
        >
          Users on plan
        </Typography>
        <TableContainer sx={{ maxHeight: '100%' }} component={Paper}>
          <Table
            stickyHeader
            sx={{ minWidth: '100%' }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{ borderBottom: 0 }}>
                <TableCell sx={customStyles.tableHeader}>Name</TableCell>
                <TableCell sx={customStyles.tableHeader}>Email</TableCell>
                <TableCell align="center" sx={customStyles.tableHeader}>
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={customStyles.tableHeader}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    opacity: row.status ? 1 : 0.5,
                    backgroundColor: row.status ? 'transparent' : '#EAEBED',
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Stack flexDirection={'row'} sx={{ alignItems: 'center' }}>
                      <Avatar src={Person} sx={customStyles.avatarTable} />
                      <Typography variant="tableCellName">
                        {row.name}
                      </Typography>
                      {row.isOwner ? (
                        <Chip variant="owner" label="OWNER" />
                      ) : (
                        <></>
                      )}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="tableCellEmail">
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {row.status ? (
                      <Typography
                        variant="tableCellStatus"
                        sx={{ color: '#29C293' }}
                      >
                        Active
                      </Typography>
                    ) : (
                      <Typography
                        variant="tableCellStatus"
                        sx={{ color: '#FD5461' }}
                      >
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
