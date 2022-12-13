//Material UI
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ObjectiveDrawerContentSlotProps {
  labelComponent: JSX.Element;
  dataComponent: JSX.Element;
}

const StyledLayout = styled(Stack)(() => ({
  gap: '14px',
}));

export const ObjectiveDrawerContentSlot: React.FC<ObjectiveDrawerContentSlotProps> = ({
  labelComponent,
  dataComponent,
}) => {
  return (
    <StyledLayout>
      {labelComponent}
      {dataComponent}
    </StyledLayout>
  );
};
