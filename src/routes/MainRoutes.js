import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const TranslateCertificate = Loadable(lazy(() => import('views/TranslateCertificate')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      // element: <DashboardDefault />
      element: <SamplePage />
    },
    {
      path: '/translate-certificate',
      element: <TranslateCertificate />
    },
    {
      path: 'dashboard',
      element: <SamplePage />
    },
    {
      path: 'settings',
      element: <SamplePage />
    },
    {
      path: 'support',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
