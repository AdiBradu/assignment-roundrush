import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/hooks';

export const PrivateRoutes: React.FC = () => {
  const { isLoading, isLoggedIn } = useAppSelector((state) => state.auth);

  if (isLoading) return null;
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};
