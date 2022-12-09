//Material UI
import { Stack, Typography, Box } from '@mui/material';

interface ProjectLabelProps {
  color: string;
  name: string;
}

export const ProjectLabel = ({ color, name }: ProjectLabelProps) => {
  return (
    <Box>
      <Stack
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 6px',
          borderRadius: '6px',
          background: color,
        }}
      >
        <Typography variant="projectLabel">{name}</Typography>
      </Stack>
    </Box>
  );
};
