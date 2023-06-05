import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { element: <Navigate to="/login" replace />, index: true },
        { path: 'login', element: <Login /> },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/index" replace />, index: true },
        { path: 'index', element: <Dashboard /> },
        { path: 'errors-list', element: <ErrorsList /> },
        { path: 'statistics', element: <Statistics /> },
        { path: 'error-details', element: <ErrorDetails /> },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));
const ErrorsList = Loadable(lazy(() => import('../pages/ErrorsList')));
const ErrorDetails = Loadable(lazy(() => import('../pages/ErrorDetails')));
const Statistics = Loadable(lazy(() => import('../pages/Statistics')));
const Login = Loadable(lazy(() => import('../pages/Login')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
