//Material UI
import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface PageContentBoxProps {
  children: JSX.Element | JSX.Element[];
}

const PageContentBox = styled(Box)(() => ({
  background: '#fff',
  width: '100%',
  height: '100%',
  position: 'relative',
  paddingLeft: '50px',
}));

export const PageContent: React.FC<PageContentBoxProps> = ({ children }) => {
  return <PageContentBox>{children}</PageContentBox>;
};
