//Material UI
import { Stack, Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//Components
import { FavoriteProject } from '../../Reusable/FavoriteProject/FavoriteProject';
//Media
import { ReactComponent as Projects } from '../../../assets/images/projects.svg';
//Styles
import styles from './DashboarFavoriteProjects.module.css';
//Redux
import { useAppSelector } from '../../../redux/hooks/hooks';
//Types
import { User } from '../../../types/types';

export const DashboarFavoriteProjects = () => {
  const users = useAppSelector((state) => state.user.users);
  const user = useAppSelector((state) => state.auth.user?.email);
  const theme = useTheme();

  const colors = [
    theme.custom.magenta,
    theme.custom.green,
    theme.custom.lightBlue,
    theme.custom.blue,
    theme.custom.purple,
    theme.custom.yellow,
    theme.custom.orange,
  ];

  return (
    <Box
      sx={{ width: '60%', padding: '40px 40px 40px 0px' }}
      className={styles.svg}
    >
      <Stack
        sx={{ gap: '40px', position: 'relative', flexDirection: 'column' }}
      >
        <Box sx={{ width: '100%', position: 'relative' }}>
          <Typography sx={{ position: 'absolute', top: '50%' }}>
            Welcome back, {user}
          </Typography>
          <Projects />
        </Box>
        <Typography variant="sectionTitle">favorite projects</Typography>
        <Stack direction={'row'} sx={{ gap: '24px', flexWrap: 'wrap' }}>
          {users.map((user: User) => (
            <FavoriteProject
              color={colors[Math.floor(Math.random() * colors.length)]}
              text={user.company.bs}
              initials={user.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
