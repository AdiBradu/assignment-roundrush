//Material UI
import { styled } from '@mui/system';
import { Stack, Box, Typography } from '@mui/material';
//Redux
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { fetchProject } from '../../../redux/features/project/projectSlice';

interface FavoriteProjectProps {
  id: number;
  color: string;
  text: string;
  initials: string;
}

const StyledStack = styled(Stack)(() => ({
  width: '138px',
  gap: '24px',
  padding: '24px',
  alignItems: 'center',
  borderRadius: '12px',
  '&:hover': { backgroundColor: '#E8F0FE', cursor: 'pointer' },
}));

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  width: '90px',
  height: '90px',
  borderRadius: '12px',
  background: color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const FavoriteProject: React.FC<FavoriteProjectProps> = ({
  id,
  color,
  text,
  initials,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchProject(id));
  };

  return (
    <StyledStack onClick={handleClick}>
      <StyledBox color={color}>
        <Typography variant="initials"> {initials}</Typography>
      </StyledBox>
      <Typography variant="favoriteProject">{text}</Typography>
    </StyledStack>
  );
};
