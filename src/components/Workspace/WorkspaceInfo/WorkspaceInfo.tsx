import styles from './WorkspaceInfo.module.css';
import { customStyles } from '../../../styles/styles';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { TextField, Typography, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Person from '../../../assets/images/ProfilePictureAdrianBradu.png';
import { useState } from 'react';

export const WorkspaceInfo = () => {
  const [info, setInfo] = useState({
    fullname: 'Adrian Bradu',
    username: 'adrian.bradu',
    email: 'adrian.bradu@gmail.com',
    language: 'Italian',
  });

  const { fullname, username, email, language } = info;

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
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
          <Avatar sx={customStyles.avatarInfo} src={Person} />
          <TextField
            label="Full Name"
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={handleChange}
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
            value={username}
            onChange={handleChange}
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
            value={email}
            onChange={handleChange}
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
            value={language}
            onChange={handleChange}
            SelectProps={{
              renderValue: () => <em className={styles.em}>{language}</em>,
            }}
            sx={{ width: '172px' }}
          >
            <MenuItem value={'Italian'}>Italian</MenuItem>
            <MenuItem value={'English'}>English</MenuItem>
          </TextField>
        </form>
      </Stack>
    </Box>
  );
};