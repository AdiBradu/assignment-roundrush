import styles from './WorkspaceInfo.module.css';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { TextField, Typography, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export const WorkspaceInfo = () => {
  return (
    <Box sx={{ padding: '0px 50px' }}>
      <Stack>
        <Typography
          variant="h6"
          color={'#31394E'}
          sx={{ marginBottom: '51px' }}
        >
          Info
        </Typography>
        <form>
          <Avatar />
          <TextField
            label="Full Name"
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Full Name"
            value={'Adrian Bradu'}
            // onChange={}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: '523px' }}
          />
          <TextField
            label="Usrname"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={'adrian.bradu'}
            // onChange={}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: '523px' }}
          />
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={'adrian.bradu@gmail.com'}
            // onChange={}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: '523px' }}
          />
          <Typography
            sx={{
              fontFamily: 'Rubik',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '18x',
              color: 'rgba(49, 57, 78, 0.5)',
              textTransform: 'uppercase',
              margin: '36px 0px',
            }}
          >
            prefernces
          </Typography>
          <TextField
            select={true}
            label="Language"
            name="language"
            id="language"
            value={'Italian'}
            // onChange={handleChangeCompany}
            SelectProps={{
              renderValue: () => <em className={styles.em}>{'Italian'}</em>,
            }}
            sx={{ width: '172px' }}
          >
            <MenuItem value={'italian'}>Italian</MenuItem>
            <MenuItem value={'english'}>English</MenuItem>
          </TextField>
        </form>
      </Stack>
    </Box>
  );
};
