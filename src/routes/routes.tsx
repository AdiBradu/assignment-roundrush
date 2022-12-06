import WorkspacePage from '../pages/Workspace/WorkspacePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NoPage from '../pages/404Page/404Page';
import AuthPage from '../pages/AuthPage/AuthPage';

const protectedRoutes = [
  {
    id: 1,
    path: '/',
    redirect: 'auth/login',
    element: <AuthPage />,
  },
  {
    id: 2,
    path: '/workspace/info',
    element: <WorkspacePage />,
  },
  {
    id: 3,
    path: '/workspace/members',
    element: <WorkspacePage />,
  },
  {
    id: 4,
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    id: 5,
    path: '/dashboard/:project',
    element: <DashboardPage />,
  },
];

const publicRoutes = [
  {
    id: 51,
    path: 'auth/login',
    element: <AuthPage />,
  },
  {
    id: 52,
    path: 'auth/sign-up',
    element: <AuthPage />,
  },
  {
    id: 53,
    path: 'auth/password-recovery',
    element: <AuthPage />,
  },
  {
    id: 54,
    path: '*',
    element: <NoPage />,
  },
];

export { protectedRoutes, publicRoutes };
