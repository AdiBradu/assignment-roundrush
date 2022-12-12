//Material UI
import { styled } from '@mui/system';
import { Stack, Typography, Box } from '@mui/material';

interface ProjectLabelProps {
  color: string;
  name: string;
}

const StyledStack = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 6px',
  borderRadius: '6px',
  background: color,
}));

export const ProjectLabel: React.FC<ProjectLabelProps> = ({ color, name }) => {
  return (
    <Box>
      <StyledStack color={color}>
        <Typography variant="projectLabel">{name}</Typography>
      </StyledStack>
    </Box>
  );
};
