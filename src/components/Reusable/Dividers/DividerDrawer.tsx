//Material Ui
import { Divider } from '@mui/material';
import { styled } from '@mui/system';

const StyledDivider = styled(Divider)(() => ({
  background: 'rgba(255,255,255,0.5)',
  height: '0.5px',
  margin: '16px 0px',
}));

export const DividerDrawer: React.FC = () => {
  return <StyledDivider orientation="horizontal" />;
};
