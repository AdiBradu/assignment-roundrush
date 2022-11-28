import HomePage from '../pages/HomePage/HomePage';
import WorkspacePage from '../pages/Workspace/WorkspacePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NoPage from '../pages/404Page/404Page';
import AuthPage from '../pages/AuthPage/AuthPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
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
  {
    path: '*',
    element: <NoPage />,
  },
];
export default routes;
