import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - App modules
const Catalogo = Loadable(lazy(() => import('pages/app/catalogo')));
const SubjectPage = Loadable(lazy(() => import('pages/app/catalogo/SubjectPage')));
const Evaluaciones = Loadable(lazy(() => import('pages/app/evaluaciones')));
const Progreso = Loadable(lazy(() => import('pages/app/progreso')));
const Material = Loadable(lazy(() => import('pages/app/material')));
const Suscripcion = Loadable(lazy(() => import('pages/app/suscripcion')));
const SuscripcionPago = Loadable(lazy(() => import('pages/app/suscripcion/pago')));
const SuscripcionFormalizar = Loadable(lazy(() => import('pages/app/suscripcion/formalizar')));
const Referidos = Loadable(lazy(() => import('pages/app/referidos')));
const Anuncios = Loadable(lazy(() => import('pages/app/anuncios')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'app',
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        },
        {
          path: 'catalogo',
          element: <Catalogo />
        },
        {
          path: 'catalogo/:subjectId',
          element: <SubjectPage />
        },
        {
          path: 'evaluaciones',
          element: <Evaluaciones />
        },
        {
          path: 'progreso',
          element: <Progreso />
        },
        {
          path: 'material',
          element: <Material />
        },
        {
          path: 'suscripcion',
          element: <Suscripcion />
        },
        {
          path: 'suscripcion/pago',
          element: <SuscripcionPago />
        },
        {
          path: 'suscripcion/formalizar',
          element: <SuscripcionFormalizar />
        },
        {
          path: 'referidos',
          element: <Referidos />
        },
        {
          path: 'anuncios',
          element: <Anuncios />
        }
      ]
    }
  ]
};

export default MainRoutes;
