//Material Ui
import { Divider } from '@mui/material';
import { styled } from '@mui/system';

const StyledDivider = styled(Divider)(() => ({
  background: 'rgba(255,255,255,0.5)',
  width: '0.5px',
}));

export const DividerVertical: React.FC = () => {
  return <StyledDivider orientation="vertical" />;
};
