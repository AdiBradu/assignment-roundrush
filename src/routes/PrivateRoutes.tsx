import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PrivateRoutes = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
