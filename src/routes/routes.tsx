import WorkspacePage from '../pages/Workspace/WorkspacePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NoPage from '../pages/404Page/404Page';
import AuthPage from '../pages/AuthPage/AuthPage';

interface Routes {
  path: string;
  redirect?: string | undefined;
  element: JSX.Element;
  children: {
    path: string;
    element: JSX.Element;
  }[];
}

const protectedRoutes: Routes[] = [
  {
    path: '/',
    redirect: '/auth/login',
    element: <AuthPage />,
    children: [],
  },
  {
    path: '/workspace',
    element: <WorkspacePage />,
    children: [
      {
        path: '/workspace/info',
        element: <WorkspacePage />,
      },
      {
        path: '/workspace/members',
        element: <WorkspacePage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {
        path: '/dashboard/:project',
        element: <DashboardPage />,
      },
    ],
  },
];

const publicRoutes: Routes[] = [
  {
    path: '/auth',
    element: <AuthPage />,
    children: [
      { path: '/auth/login', element: <AuthPage /> },
      { path: '/auth/sign-up', element: <AuthPage /> },
      { path: '/auth/recovery-password', element: <AuthPage /> },
    ],
  },
  {
    path: '*',
    element: <NoPage />,
    children: [],
  },
];

export { protectedRoutes, publicRoutes };
