import WorkspacePage from '../pages/Workspace/WorkspacePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NoPage from '../pages/404Page/404Page';
import AuthPage from '../pages/AuthPage/AuthPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import { Outlet } from 'react-router-dom';

interface Routes {
  path: string;
  index?: boolean;
  redirect?: string | undefined;
  element?: JSX.Element;
  children?: {
    index?: boolean;
    path?: string;
    element: JSX.Element;
  }[];
}

const protectedRoutes: Routes[] = [
  {
    path: '/',
    index: true,
    redirect: '/auth/login',
    element: <AuthPage />,
    children: [],
  },
  {
    path: '/workspace',
    children: [
      {
        index: true,
        element: <WorkspacePage />,
      },
      {
        index: false,
        path: 'info',
        element: <WorkspacePage />,
      },
      {
        index: false,
        path: 'members',
        element: <WorkspacePage />,
      },
    ],
  },
  {
    index: true,
    path: '/dashboard',
    element: <DashboardPage />,
    children: [],
  },
  {
    index: true,
    path: '/projects/:id',
    element: <ProjectPage />,
    children: [],
  },
];

const publicRoutes: Routes[] = [
  {
    path: '/auth',
    children: [
      { index: true, element: <AuthPage /> },
      { index: false, path: 'login', element: <AuthPage /> },
      { index: false, path: 'sign-up', element: <AuthPage /> },
      { index: false, path: 'recovery-password', element: <AuthPage /> },
    ],
  },
  {
    path: '*',
    element: <NoPage />,
    children: [],
  },
];

export { protectedRoutes, publicRoutes };
