//Material UI
import { Stack, Box } from '@mui/system';
import { Typography } from '@mui/material';
//Redux
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { fetchProject } from '../../../redux/features/project/projectSlice';
interface FavoriteProjectProps {
  id: number;
  color: string;
  text: string;
  initials: string;
  background: string;
}

export const FavoriteProject = ({
  id,
  color,
  text,
  initials,
  background,
}: FavoriteProjectProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchProject(id));
  };

  return (
    <Stack
      sx={{
        width: '138px',
        gap: '24px',
        padding: '24px',
        alignItems: 'center',
        borderRadius: '12px',
        // backgroundColor: background,
        '&:hover': { backgroundColor: '#E8F0FE', cursor: 'pointer' },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          width: '90px',
          height: '90px',
          borderRadius: '12px',
          background: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="initials"> {initials}</Typography>
      </Box>
      <Typography variant="favoriteProject">{text}</Typography>
    </Stack>
  );
};
