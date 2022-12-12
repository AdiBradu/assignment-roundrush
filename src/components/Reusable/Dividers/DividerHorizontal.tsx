//Material Ui
import { Divider } from '@mui/material';
import { styled } from '@mui/system';

const StyledDivider = styled(Divider)(() => ({
  height: '0.5px',
  background: 'rgba(255,255,255,0.5)',
}));

export const DividerHorizontal = () => {
  return <StyledDivider orientation="horizontal" />;
};
