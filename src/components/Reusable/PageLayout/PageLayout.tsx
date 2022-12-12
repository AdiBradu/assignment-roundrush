//Material UI
import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PageBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  position: 'relative',
}));

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <PageBox>{children}</PageBox>;
};
