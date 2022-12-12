//Material UI
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

interface ObjectivesTableDueDateProps {
  date: string | undefined;
}

const StyledTypography = styled(Typography)(() => ({
  width: '130px',
  borderRadius: '6px',
  color: 'rgba(49, 57, 78, 0.5)',
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center',
}));

export const ObjectivesTableDueDate = ({
  date,
}: ObjectivesTableDueDateProps) => {
  return <StyledTypography>{date}</StyledTypography>;
};
