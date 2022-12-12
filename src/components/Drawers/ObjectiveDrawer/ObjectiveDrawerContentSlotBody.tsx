//Mterial UI
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ObjectiveDrawerContentSlotBodyProps {
  icon?: JSX.Element;
  text: string;
}

const StyledStack = styled(Stack)(() => ({
  gap: '12px',
  alignItems: 'center',
}));

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#31394E',
  textTransform: 'capitalize',
}));

export const ObjectiveDrawerContentSlotBody = ({
  icon,
  text,
}: ObjectiveDrawerContentSlotBodyProps) => {
  return (
    <StyledStack flexDirection={'row'}>
      {icon && icon}
      <StyledTypography>{text}</StyledTypography>
    </StyledStack>
  );
};
