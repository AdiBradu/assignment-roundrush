import { useState } from 'react';
//Material UI
import {
  Avatar,
  Box,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Stack,
} from '@mui/material';
import { styled } from '@mui/system';
//Media
import Person from '../../../assets/images/ProfilePictureAdrianBradu.png';

const StyledInputLabel = styled(InputLabel)(() => ({
  color: '#ADB0B8',
  position: 'relative',
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '14px',
  marginLeft: '8px',
  marginBottom: '12px',
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: '33.33px',
  height: '33.33px',
}));

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Rubik',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '18x',
  color: 'rgba(49, 57, 78, 0.5)',
  textTransform: 'uppercase',
  margin: '36px 0px',
}));

const StyledEm = styled('em')(() => ({
  color: '#000',
}));

const StyledTitle = styled(Typography)(() => ({
  marginBottom: '40px',
  color: '#31394E',
  fontFamily: 'Rubik',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '28x',
}));

export const WorkspaceInfo: React.FC = () => {
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
    <Box sx={{ padding: '0px 50px', width: '85%' }}>
      <Stack>
        <StyledTitle>Info</StyledTitle>
        <form>
          <Stack>
            <StyledInputLabel>Avatar</StyledInputLabel>
            <StyledAvatar src={Person} />
          </Stack>
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
          <StyledTypography>prefernces</StyledTypography>
          <TextField
            select={true}
            label="Language"
            name="language"
            id="language"
            value={language}
            onChange={handleChange}
            SelectProps={{
              renderValue: () => <StyledEm>{language}</StyledEm>,
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
