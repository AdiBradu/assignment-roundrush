import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/hooks';

const PrivateRoutes = () => {
  const { isLoading, isLoggedIn } = useAppSelector((state) => state.auth);

  if (isLoading) return null;
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
