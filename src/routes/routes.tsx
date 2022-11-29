import WorkspacePage from '../pages/Workspace/WorkspacePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NoPage from '../pages/404Page/404Page';
import AuthPage from '../pages/AuthPage/AuthPage';

const protectedRoutes = [
  {
    path: '/',
    redirect: 'auth/login',
    element: <AuthPage />,
  },
  {
    path: '/workspace/info',
    element: <WorkspacePage />,
  },
  {
    path: '/workspace/members',
    element: <WorkspacePage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/dashboard/:project',
    element: <DashboardPage />,
  },
];

const publicRoutes = [
  {
    path: 'auth/login',
    element: <AuthPage />,
  },
  {
    path: 'auth/sign-up',
    element: <AuthPage />,
  },
  {
    path: 'auth/password-recovery',
    element: <AuthPage />,
  },
  {
    path: '*',
    element: <NoPage />,
  },
];

export { protectedRoutes, publicRoutes };
