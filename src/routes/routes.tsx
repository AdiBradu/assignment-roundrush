import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage/PasswordRecoveryPage';
import WorkspacePage from '../pages/Workspace/WorkspacePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NoPage from '../pages/404Page/404Page';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/password-recovery',
    element: <PasswordRecoveryPage />,
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
