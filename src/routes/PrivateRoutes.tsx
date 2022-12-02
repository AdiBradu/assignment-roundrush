import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks/hooks';

const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.user.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
