//Material UI
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ObjectiveDrawerContentDescriptionBodyProps {
  body: string;
}

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: 'rgba(21, 27, 38, 0.5)',
}));

export const ObjectiveDrawerContentDescriptionBody: React.FC<
  ObjectiveDrawerContentDescriptionBodyProps
> = ({ body }) => {
  return <StyledTypography>{body}</StyledTypography>;
};
