import { createBrowserRouter } from 'react-router-dom';
import { paths } from '../config/paths';

// Layouts
import { AuthLayout, DashboardLayout } from '../components/layouts';

// Public routes
import LoginRoute from './routes/public/login';
import RegisterRoute from './routes/public/register';

// App routes
import DashboardRoute from './routes/app/dashboard';

// Lazy load all other routes for better performance
import { lazy } from 'react';

// Tenders
const TendersNewRoute = lazy(() => import('./routes/app/tenders/new'));
const TendersViewRoute = lazy(() => import('./routes/app/tenders/view'));
const TendersParticipationRoute = lazy(() => import('./routes/app/tenders/participation'));
const TendersPrepareRoute = lazy(() => import('./routes/app/tenders/prepare'));
const TendersPendingRoute = lazy(() => import('./routes/app/tenders/pending'));
const TendersAwardedRoute = lazy(() => import('./routes/app/tenders/awarded'));
const TendersContractRoute = lazy(() => import('./routes/app/tenders/contract'));
const TendersGuaranteeStatusRoute = lazy(() => import('./routes/app/tenders/guarantee-status'));
const TendersUpdateGuaranteeRoute = lazy(() => import('./routes/app/tenders/update-guarantee'));
const TendersRecoverGuaranteeRoute = lazy(() => import('./routes/app/tenders/recover-guarantee'));
const TendersResultsRoute = lazy(() => import('./routes/app/tenders/results'));
const TendersGlobalRoute = lazy(() => import('./routes/app/tenders/global'));
const TendersStatisticsRoute = lazy(() => import('./routes/app/tenders/statistics'));
const TendersQualificationRoute = lazy(() => import('./routes/app/tenders/qualification'));

// Contracts
const ContractsNewRoute = lazy(() => import('./routes/app/contracts/new'));
const ContractsViewRoute = lazy(() => import('./routes/app/contracts/view'));
const ContractsFinalGuaranteeRoute = lazy(() => import('./routes/app/contracts/final-guarantee'));

// Quotes
const QuotesNewRoute = lazy(() => import('./routes/app/quotes/new'));
const QuotesViewRoute = lazy(() => import('./routes/app/quotes/view'));
const QuotesOrderStatusRoute = lazy(() => import('./routes/app/quotes/order-status'));
const QuotesPriceRefRoute = lazy(() => import('./routes/app/quotes/price-reference'));
const QuotesDetailsRoute = lazy(() => import('./routes/app/quotes/details'));
const QuotesTemplateRoute = lazy(() => import('./routes/app/quotes/template'));

// Projects
const ProjectsNewRoute = lazy(() => import('./routes/app/projects/new'));
const ProjectsEditRoute = lazy(() => import('./routes/app/projects/edit'));
const ProjectsViewRoute = lazy(() => import('./routes/app/projects/view'));
const ProjectsDeleteRoute = lazy(() => import('./routes/app/projects/delete'));
const ProjectsSubProjectRoute = lazy(() => import('./routes/app/projects/sub-project'));
const ProjectsStatisticsRoute = lazy(() => import('./routes/app/projects/statistics'));
const ProjectsStatusRoute = lazy(() => import('./routes/app/projects/status'));
const ProjectsGeolocationRoute = lazy(() => import('./routes/app/projects/geolocation'));
const ProjectsAssignmentsRoute = lazy(() => import('./routes/app/projects/assignments'));

// Add more lazy imports for other modules...
// (I'll show the pattern, you can add the rest)

export const router = createBrowserRouter([
  // Public routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: paths.auth.login.path,
        element: <LoginRoute />,
      },
      {
        path: paths.auth.register.path,
        element: <RegisterRoute />,
      },
    ],
  },

  // Protected app routes
  {
    path: paths.app.root.path,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardRoute />,
      },
      {
        path: paths.app.dashboard.path,
        element: <DashboardRoute />,
      },

      // TENDERS ROUTES
      {
        path: paths.app.tenders.new.path,
        element: <TendersNewRoute />,
      },
      {
        path: paths.app.tenders.view.path,
        element: <TendersViewRoute />,
      },
      {
        path: paths.app.tenders.participation.path,
        element: <TendersParticipationRoute />,
      },
      {
        path: paths.app.tenders.prepare.path,
        element: <TendersPrepareRoute />,
      },
      {
        path: paths.app.tenders.pending.path,
        element: <TendersPendingRoute />,
      },
      {
        path: paths.app.tenders.awarded.path,
        element: <TendersAwardedRoute />,
      },
      {
        path: paths.app.tenders.contract.path,
        element: <TendersContractRoute />,
      },
      {
        path: paths.app.tenders.guaranteeStatus.path,
        element: <TendersGuaranteeStatusRoute />,
      },
      {
        path: paths.app.tenders.updateGuarantee.path,
        element: <TendersUpdateGuaranteeRoute />,
      },
      {
        path: paths.app.tenders.recoverGuarantee.path,
        element: <TendersRecoverGuaranteeRoute />,
      },
      {
        path: paths.app.tenders.results.path,
        element: <TendersResultsRoute />,
      },
      {
        path: paths.app.tenders.global.path,
        element: <TendersGlobalRoute />,
      },
      {
        path: paths.app.tenders.statistics.path,
        element: <TendersStatisticsRoute />,
      },
      {
        path: paths.app.tenders.qualification.path,
        element: <TendersQualificationRoute />,
      },

      // CONTRACTS ROUTES
      {
        path: paths.app.contracts.new.path,
        element: <ContractsNewRoute />,
      },
      {
        path: paths.app.contracts.view.path,
        element: <ContractsViewRoute />,
      },
      {
        path: paths.app.contracts.finalGuarantee.path,
        element: <ContractsFinalGuaranteeRoute />,
      },

      // QUOTES ROUTES
      {
        path: paths.app.quotes.new.path,
        element: <QuotesNewRoute />,
      },
      {
        path: paths.app.quotes.view.path,
        element: <QuotesViewRoute />,
      },
      {
        path: paths.app.quotes.orderStatus.path,
        element: <QuotesOrderStatusRoute />,
      },
      {
        path: paths.app.quotes.priceRef.path,
        element: <QuotesPriceRefRoute />,
      },
      {
        path: paths.app.quotes.details.path,
        element: <QuotesDetailsRoute />,
      },
      {
        path: paths.app.quotes.template.path,
        element: <QuotesTemplateRoute />,
      },

      // PROJECTS ROUTES
      {
        path: paths.app.projects.new.path,
        element: <ProjectsNewRoute />,
      },
      {
        path: paths.app.projects.edit.path,
        element: <ProjectsEditRoute />,
      },
      {
        path: paths.app.projects.view.path,
        element: <ProjectsViewRoute />,
      },
      {
        path: paths.app.projects.delete.path,
        element: <ProjectsDeleteRoute />,
      },
      {
        path: paths.app.projects.subProject.path,
        element: <ProjectsSubProjectRoute />,
      },
      {
        path: paths.app.projects.statistics.path,
        element: <ProjectsStatisticsRoute />,
      },
      {
        path: paths.app.projects.status.path,
        element: <ProjectsStatusRoute />,
      },
      {
        path: paths.app.projects.geolocation.path,
        element: <ProjectsGeolocationRoute />,
      },
      {
        path: paths.app.projects.assignments.path,
        element: <ProjectsAssignmentsRoute />,
      },

      // Add more routes following the same pattern...
      // You'll add: receptions, reports, invoicing, clientPayments, etc.
    ],
  },

  // Redirect root to login
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginRoute />,
      },
    ],
  },
]);