//Material UI
import { Stack, Box } from '@mui/system';
import { Typography } from '@mui/material';

interface FavoriteProjectProps {
  color: string;
  text: string;
  initials: string;
}

export const FavoriteProject = ({
  color,
  text,
  initials,
}: FavoriteProjectProps) => {
  return (
    <Stack
      sx={{
        width: '114px',
        gap: '24px',
        padding: '24px',
        alignItems: 'center',
        borderRadius: '12px',
        '&:hover': { backgroundColor: '#E8F0FE', cursor: 'pointer' },
      }}
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
