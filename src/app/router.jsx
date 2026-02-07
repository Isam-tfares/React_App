import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { paths } from '../config/paths';

// Layouts
import { AuthLayout, DashboardLayout } from '../components/layouts';

// Public routes (not lazy - need them immediately)
import LoginRoute from './routes/public/login';
import RegisterRoute from './routes/public/register';
import DashboardRoute from './routes/app/dashboard';

// Loading component
const LoadingFallback = () => (
  <div style={{ padding: '24px', textAlign: 'center' }}>
    <div>Chargement...</div>
  </div>
);

// Lazy load all route components
// TENDERS
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

// CONTRACTS
const ContractsNewRoute = lazy(() => import('./routes/app/contracts/new'));
const ContractsViewRoute = lazy(() => import('./routes/app/contracts/view'));
const ContractsFinalGuaranteeRoute = lazy(() => import('./routes/app/contracts/final-guarantee'));

// QUOTES
const QuotesNewRoute = lazy(() => import('./routes/app/quotes/new'));
const QuotesViewRoute = lazy(() => import('./routes/app/quotes/view'));
const QuotesOrderStatusRoute = lazy(() => import('./routes/app/quotes/order-status'));
const QuotesPriceRefRoute = lazy(() => import('./routes/app/quotes/price-reference'));
const QuotesDetailsRoute = lazy(() => import('./routes/app/quotes/details'));
const QuotesTemplateRoute = lazy(() => import('./routes/app/quotes/template'));

// PROJECTS
const ProjectsNewRoute = lazy(() => import('./routes/app/projects/new'));
const ProjectsEditRoute = lazy(() => import('./routes/app/projects/edit'));
const ProjectsViewRoute = lazy(() => import('./routes/app/projects/view'));
const ProjectsDeleteRoute = lazy(() => import('./routes/app/projects/delete'));
const ProjectsSubProjectRoute = lazy(() => import('./routes/app/projects/sub-project'));
const ProjectsStatisticsRoute = lazy(() => import('./routes/app/projects/statistics'));
const ProjectsStatusRoute = lazy(() => import('./routes/app/projects/status'));
const ProjectsGeolocationRoute = lazy(() => import('./routes/app/projects/geolocation'));
const ProjectsAssignmentsRoute = lazy(() => import('./routes/app/projects/assignments'));

// RECEPTIONS
const ReceptionsNewRoute = lazy(() => import('./routes/app/receptions/new'));
const ReceptionsNewTractionRoute = lazy(() => import('./routes/app/receptions/new-traction'));
const ReceptionsPreReceptionRoute = lazy(() => import('./routes/app/receptions/pre-reception'));
const ReceptionsNewStudyRoute = lazy(() => import('./routes/app/receptions/new-study'));
const ReceptionsDeleteRoute = lazy(() => import('./routes/app/receptions/delete'));
const ReceptionsOtherMaterialTestRoute = lazy(() => import('./routes/app/receptions/other-material-test'));
const ReceptionsConcreteTestRoute = lazy(() => import('./routes/app/receptions/concrete-test'));
const ReceptionsCylinderManagementRoute = lazy(() => import('./routes/app/receptions/cylinder-management'));
const ReceptionsEditRoute = lazy(() => import('./routes/app/receptions/edit'));
const ReceptionsOtherMaterialsTrackingRoute = lazy(() => import('./routes/app/receptions/other-materials-tracking'));
const ReceptionsConcreteTestLabRoute = lazy(() => import('./routes/app/receptions/concrete-test-lab'));
const ReceptionsTestConsultationRoute = lazy(() => import('./routes/app/receptions/test-consultation'));
const ReceptionsLabTreatmentRoute = lazy(() => import('./routes/app/receptions/lab-treatment'));
const ReceptionsInitializationRoute = lazy(() => import('./routes/app/receptions/initialization'));
const ReceptionsPlanningRoute = lazy(() => import('./routes/app/receptions/planning'));

// REPORTS
const ReportsTodoOtherMaterialsRoute = lazy(() => import('./routes/app/reports/todo-other-materials'));
const ReportsTodoConcreteRoute = lazy(() => import('./routes/app/reports/todo-concrete'));
const ReportsTodoGlobalRoute = lazy(() => import('./routes/app/reports/todo-global'));
const ReportsEditRoute = lazy(() => import('./routes/app/reports/edit'));
const ReportsViewPriceRoute = lazy(() => import('./routes/app/reports/view-price'));
const ReportsSynthesisRoute = lazy(() => import('./routes/app/reports/synthesis'));
const ReportsDeliveryStatusRoute = lazy(() => import('./routes/app/reports/delivery-status'));
const ReportsEditionRoute = lazy(() => import('./routes/app/reports/edition'));
const ReportsStudyRoute = lazy(() => import('./routes/app/reports/study'));

// INVOICING
const InvoicingNewRoute = lazy(() => import('./routes/app/invoicing/new'));
const InvoicingReportsToBillRoute = lazy(() => import('./routes/app/invoicing/reports-to-bill'));
const InvoicingReportsByProjectRoute = lazy(() => import('./routes/app/invoicing/reports-by-project'));
const InvoicingCreateRoute = lazy(() => import('./routes/app/invoicing/create'));
const InvoicingViewEditRoute = lazy(() => import('./routes/app/invoicing/view-edit'));
const InvoicingAttachmentRoute = lazy(() => import('./routes/app/invoicing/attachment'));
const InvoicingDeliveryRoute = lazy(() => import('./routes/app/invoicing/delivery'));
const InvoicingOtherRoute = lazy(() => import('./routes/app/invoicing/other'));
const InvoicingCancelledRoute = lazy(() => import('./routes/app/invoicing/cancelled'));
const InvoicingPreInvoiceRoute = lazy(() => import('./routes/app/invoicing/pre-invoice'));
const InvoicingCreditNoteRoute = lazy(() => import('./routes/app/invoicing/credit-note'));

// CLIENT PAYMENTS
const ClientPaymentsNewRoute = lazy(() => import('./routes/app/client-payments/new'));
const ClientPaymentsAdvanceRoute = lazy(() => import('./routes/app/client-payments/advance'));
const ClientPaymentsViewRoute = lazy(() => import('./routes/app/client-payments/view'));
const ClientPaymentsPendingRoute = lazy(() => import('./routes/app/client-payments/pending'));
const ClientPaymentsInvoiceTrackingRoute = lazy(() => import('./routes/app/client-payments/invoice-tracking'));
const ClientPaymentsClientStatementRoute = lazy(() => import('./routes/app/client-payments/client-statement'));
const ClientPaymentsProjectStatementRoute = lazy(() => import('./routes/app/client-payments/project-statement'));
const ClientPaymentsGlobalSituationRoute = lazy(() => import('./routes/app/client-payments/global-situation'));
const ClientPaymentsFinancialSituationRoute = lazy(() => import('./routes/app/client-payments/financial-situation'));
const ClientPaymentsCancelledRoute = lazy(() => import('./routes/app/client-payments/cancelled'));
const ClientPaymentsUnpaidRoute = lazy(() => import('./routes/app/client-payments/unpaid'));

// DELIVERY NOTES
const DeliveryNotesTodoRoute = lazy(() => import('./routes/app/delivery-notes/todo-reports'));
const DeliveryNotesEditViewRoute = lazy(() => import('./routes/app/delivery-notes/edit-view'));
const DeliveryNotesDeliveryRoute = lazy(() => import('./routes/app/delivery-notes/delivery'));

// PURCHASES
const PurchasesSettingsRoute = lazy(() => import('./routes/app/purchases/settings'));
const PurchasesSupplierRoute = lazy(() => import('./routes/app/purchases/supplier'));
const PurchasesValidateFileRoute = lazy(() => import('./routes/app/purchases/validate-file'));
const PurchasesFileRoute = lazy(() => import('./routes/app/purchases/file'));
const PurchasesExpenseRoute = lazy(() => import('./routes/app/purchases/expense'));
const PurchasesPaymentsRoute = lazy(() => import('./routes/app/purchases/payments'));
const PurchasesBudgetRoute = lazy(() => import('./routes/app/purchases/budget'));

// PERSONNEL
const PersonnelEmployeeRoute = lazy(() => import('./routes/app/personnel/employee'));
const PersonnelAdministrativeRoute = lazy(() => import('./routes/app/personnel/administrative'));
const PersonnelExperienceRoute = lazy(() => import('./routes/app/personnel/experience'));
const PersonnelLeaveRightsRoute = lazy(() => import('./routes/app/personnel/leave-rights'));
const PersonnelLeaveRoute = lazy(() => import('./routes/app/personnel/leave'));
const PersonnelPayrollRoute = lazy(() => import('./routes/app/personnel/payroll'));

// TREASURY
const TreasurySituationRoute = lazy(() => import('./routes/app/treasury/situation'));
const TreasuryBankRoute = lazy(() => import('./routes/app/treasury/bank'));
const TreasuryExpensesRoute = lazy(() => import('./routes/app/treasury/expenses'));
const TreasuryHqCashRoute = lazy(() => import('./routes/app/treasury/hq-cash'));
const TreasuryBranchCashRoute = lazy(() => import('./routes/app/treasury/branch-cash'));
const TreasuryEmployeeCashRoute = lazy(() => import('./routes/app/treasury/employee-cash'));

// LOGISTICS
const LogisticsVehiclesRoute = lazy(() => import('./routes/app/logistics/vehicles'));
const LogisticsFacilitiesRoute = lazy(() => import('./routes/app/logistics/facilities'));
const LogisticsEquipmentRoute = lazy(() => import('./routes/app/logistics/equipment'));
const LogisticsOtherEquipmentRoute = lazy(() => import('./routes/app/logistics/other-equipment'));
const LogisticsCreditRentRoute = lazy(() => import('./routes/app/logistics/credit-rent'));

// CLIENTS
const ClientsUpdateRoute = lazy(() => import('./routes/app/clients/update'));
const ClientsSituationRoute = lazy(() => import('./routes/app/clients/situation'));
const ClientsProjectSituationRoute = lazy(() => import('./routes/app/clients/project-situation'));
const ClientsBilledReportsRoute = lazy(() => import('./routes/app/clients/billed-reports'));
const ClientsInvoiceSituationRoute = lazy(() => import('./routes/app/clients/invoice-situation'));

// MESSAGING
const MessagingSendMailRoute = lazy(() => import('./routes/app/messaging/send-mail'));
const MessagingReceiveMailRoute = lazy(() => import('./routes/app/messaging/receive-mail'));
const MessagingInternalRoute = lazy(() => import('./routes/app/messaging/internal'));
const MessagingAppRemarkRoute = lazy(() => import('./routes/app/messaging/app-remark'));
const MessagingCancelRequestRoute = lazy(() => import('./routes/app/messaging/cancel-request'));
const MessagingAddClientRoute = lazy(() => import('./routes/app/messaging/add-client'));

// DOCUMENTS
const DocumentsUploadRoute = lazy(() => import('./routes/app/documents/upload'));
const DocumentsScanRoute = lazy(() => import('./routes/app/documents/scan'));
const DocumentsSearchRoute = lazy(() => import('./routes/app/documents/search'));
const DocumentsUpdateRefRoute = lazy(() => import('./routes/app/documents/update-ref'));
const DocumentsDeleteRoute = lazy(() => import('./routes/app/documents/delete'));
const DocumentsHistoryRoute = lazy(() => import('./routes/app/documents/history'));

// SETTINGS
const SettingsGlobalRoute = lazy(() => import('./routes/app/settings/global'));
const SettingsProjectsRoute = lazy(() => import('./routes/app/settings/projects'));
const SettingsProfessionRoute = lazy(() => import('./routes/app/settings/profession'));
const SettingsGraphRoute = lazy(() => import('./routes/app/settings/graph'));
const SettingsCompanyRoute = lazy(() => import('./routes/app/settings/company'));
const SettingsUserRoute = lazy(() => import('./routes/app/settings/user'));
const SettingsConnectionRoute = lazy(() => import('./routes/app/settings/connection'));
const SettingsInitTableRoute = lazy(() => import('./routes/app/settings/init-table'));
const SettingsObjectivesRoute = lazy(() => import('./routes/app/settings/objectives'));
const SettingsGedRoute = lazy(() => import('./routes/app/settings/ged'));

// RIGHTS
const RightsAdminMenuRoute = lazy(() => import('./routes/app/rights/admin-menu'));
const RightsFunctionalMenuRoute = lazy(() => import('./routes/app/rights/functional-menu'));
const RightsChargeAllocationRoute = lazy(() => import('./routes/app/rights/charge-allocation'));
const RightsTaskListRoute = lazy(() => import('./routes/app/rights/task-list'));
const RightsClientRoute = lazy(() => import('./routes/app/rights/client'));
const RightsRegionsRoute = lazy(() => import('./routes/app/rights/regions'));

export const router = createBrowserRouter([
  // Public routes
  {
    element: <AuthLayout />,
    children: [
      { path: paths.auth.login.path, element: <LoginRoute /> },
      { path: paths.auth.register.path, element: <RegisterRoute /> },
    ],
  },

  // Protected app routes
  {
    path: paths.app.root.path,
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardRoute /> },
      { path: paths.app.dashboard.path, element: <DashboardRoute /> },

      // TENDERS
      { path: paths.app.tenders.new.path, element: <Suspense fallback={<LoadingFallback />}><TendersNewRoute /></Suspense> },
      { path: paths.app.tenders.view.path, element: <Suspense fallback={<LoadingFallback />}><TendersViewRoute /></Suspense> },
      { path: paths.app.tenders.participation.path, element: <Suspense fallback={<LoadingFallback />}><TendersParticipationRoute /></Suspense> },
      { path: paths.app.tenders.prepare.path, element: <Suspense fallback={<LoadingFallback />}><TendersPrepareRoute /></Suspense> },
      { path: paths.app.tenders.pending.path, element: <Suspense fallback={<LoadingFallback />}><TendersPendingRoute /></Suspense> },
      { path: paths.app.tenders.awarded.path, element: <Suspense fallback={<LoadingFallback />}><TendersAwardedRoute /></Suspense> },
      { path: paths.app.tenders.contract.path, element: <Suspense fallback={<LoadingFallback />}><TendersContractRoute /></Suspense> },
      { path: paths.app.tenders.guaranteeStatus.path, element: <Suspense fallback={<LoadingFallback />}><TendersGuaranteeStatusRoute /></Suspense> },
      { path: paths.app.tenders.updateGuarantee.path, element: <Suspense fallback={<LoadingFallback />}><TendersUpdateGuaranteeRoute /></Suspense> },
      { path: paths.app.tenders.recoverGuarantee.path, element: <Suspense fallback={<LoadingFallback />}><TendersRecoverGuaranteeRoute /></Suspense> },
      { path: paths.app.tenders.results.path, element: <Suspense fallback={<LoadingFallback />}><TendersResultsRoute /></Suspense> },
      { path: paths.app.tenders.global.path, element: <Suspense fallback={<LoadingFallback />}><TendersGlobalRoute /></Suspense> },
      { path: paths.app.tenders.statistics.path, element: <Suspense fallback={<LoadingFallback />}><TendersStatisticsRoute /></Suspense> },
      { path: paths.app.tenders.qualification.path, element: <Suspense fallback={<LoadingFallback />}><TendersQualificationRoute /></Suspense> },

      // CONTRACTS
      { path: paths.app.contracts.new.path, element: <Suspense fallback={<LoadingFallback />}><ContractsNewRoute /></Suspense> },
      { path: paths.app.contracts.view.path, element: <Suspense fallback={<LoadingFallback />}><ContractsViewRoute /></Suspense> },
      { path: paths.app.contracts.finalGuarantee.path, element: <Suspense fallback={<LoadingFallback />}><ContractsFinalGuaranteeRoute /></Suspense> },

      // QUOTES
      { path: paths.app.quotes.new.path, element: <Suspense fallback={<LoadingFallback />}><QuotesNewRoute /></Suspense> },
      { path: paths.app.quotes.view.path, element: <Suspense fallback={<LoadingFallback />}><QuotesViewRoute /></Suspense> },
      { path: paths.app.quotes.orderStatus.path, element: <Suspense fallback={<LoadingFallback />}><QuotesOrderStatusRoute /></Suspense> },
      { path: paths.app.quotes.priceRef.path, element: <Suspense fallback={<LoadingFallback />}><QuotesPriceRefRoute /></Suspense> },
      { path: paths.app.quotes.details.path, element: <Suspense fallback={<LoadingFallback />}><QuotesDetailsRoute /></Suspense> },
      { path: paths.app.quotes.template.path, element: <Suspense fallback={<LoadingFallback />}><QuotesTemplateRoute /></Suspense> },

      // PROJECTS
      { path: paths.app.projects.new.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsNewRoute /></Suspense> },
      { path: paths.app.projects.edit.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsEditRoute /></Suspense> },
      { path: paths.app.projects.view.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsViewRoute /></Suspense> },
      { path: paths.app.projects.delete.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsDeleteRoute /></Suspense> },
      { path: paths.app.projects.subProject.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsSubProjectRoute /></Suspense> },
      { path: paths.app.projects.statistics.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsStatisticsRoute /></Suspense> },
      { path: paths.app.projects.status.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsStatusRoute /></Suspense> },
      { path: paths.app.projects.geolocation.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsGeolocationRoute /></Suspense> },
      { path: paths.app.projects.assignments.path, element: <Suspense fallback={<LoadingFallback />}><ProjectsAssignmentsRoute /></Suspense> },

      // RECEPTIONS
      { path: paths.app.receptions.new.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsNewRoute /></Suspense> },
      { path: paths.app.receptions.newTraction.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsNewTractionRoute /></Suspense> },
      { path: paths.app.receptions.preReception.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsPreReceptionRoute /></Suspense> },
      { path: paths.app.receptions.newStudy.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsNewStudyRoute /></Suspense> },
      { path: paths.app.receptions.delete.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsDeleteRoute /></Suspense> },
      { path: paths.app.receptions.otherMaterialTest.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsOtherMaterialTestRoute /></Suspense> },
      { path: paths.app.receptions.concreteTest.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsConcreteTestRoute /></Suspense> },
      { path: paths.app.receptions.cylinderManagement.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsCylinderManagementRoute /></Suspense> },
      { path: paths.app.receptions.edit.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsEditRoute /></Suspense> },
      { path: paths.app.receptions.otherMaterialsTracking.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsOtherMaterialsTrackingRoute /></Suspense> },
      { path: paths.app.receptions.concreteTestLab.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsConcreteTestLabRoute /></Suspense> },
      { path: paths.app.receptions.testConsultation.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsTestConsultationRoute /></Suspense> },
      { path: paths.app.receptions.labTreatment.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsLabTreatmentRoute /></Suspense> },
      { path: paths.app.receptions.initialization.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsInitializationRoute /></Suspense> },
      { path: paths.app.receptions.planning.path, element: <Suspense fallback={<LoadingFallback />}><ReceptionsPlanningRoute /></Suspense> },

      // REPORTS
      { path: paths.app.reports.todoOtherMaterials.path, element: <Suspense fallback={<LoadingFallback />}><ReportsTodoOtherMaterialsRoute /></Suspense> },
      { path: paths.app.reports.todoConcrete.path, element: <Suspense fallback={<LoadingFallback />}><ReportsTodoConcreteRoute /></Suspense> },
      { path: paths.app.reports.todoGlobal.path, element: <Suspense fallback={<LoadingFallback />}><ReportsTodoGlobalRoute /></Suspense> },
      { path: paths.app.reports.edit.path, element: <Suspense fallback={<LoadingFallback />}><ReportsEditRoute /></Suspense> },
      { path: paths.app.reports.viewPrice.path, element: <Suspense fallback={<LoadingFallback />}><ReportsViewPriceRoute /></Suspense> },
      { path: paths.app.reports.synthesis.path, element: <Suspense fallback={<LoadingFallback />}><ReportsSynthesisRoute /></Suspense> },
      { path: paths.app.reports.deliveryStatus.path, element: <Suspense fallback={<LoadingFallback />}><ReportsDeliveryStatusRoute /></Suspense> },
      { path: paths.app.reports.edition.path, element: <Suspense fallback={<LoadingFallback />}><ReportsEditionRoute /></Suspense> },
      { path: paths.app.reports.study.path, element: <Suspense fallback={<LoadingFallback />}><ReportsStudyRoute /></Suspense> },

      // INVOICING
      { path: paths.app.invoicing.new.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingNewRoute /></Suspense> },
      { path: paths.app.invoicing.reportsToBill.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingReportsToBillRoute /></Suspense> },
      { path: paths.app.invoicing.reportsByProject.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingReportsByProjectRoute /></Suspense> },
      { path: paths.app.invoicing.create.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingCreateRoute /></Suspense> },
      { path: paths.app.invoicing.viewEdit.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingViewEditRoute /></Suspense> },
      { path: paths.app.invoicing.attachment.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingAttachmentRoute /></Suspense> },
      { path: paths.app.invoicing.delivery.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingDeliveryRoute /></Suspense> },
      { path: paths.app.invoicing.other.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingOtherRoute /></Suspense> },
      { path: paths.app.invoicing.cancelled.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingCancelledRoute /></Suspense> },
      { path: paths.app.invoicing.preInvoice.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingPreInvoiceRoute /></Suspense> },
      { path: paths.app.invoicing.creditNote.path, element: <Suspense fallback={<LoadingFallback />}><InvoicingCreditNoteRoute /></Suspense> },

      // CLIENT PAYMENTS
      { path: paths.app.clientPayments.new.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsNewRoute /></Suspense> },
      { path: paths.app.clientPayments.advance.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsAdvanceRoute /></Suspense> },
      { path: paths.app.clientPayments.view.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsViewRoute /></Suspense> },
      { path: paths.app.clientPayments.pending.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsPendingRoute /></Suspense> },
      { path: paths.app.clientPayments.invoiceTracking.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsInvoiceTrackingRoute /></Suspense> },
      { path: paths.app.clientPayments.clientStatement.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsClientStatementRoute /></Suspense> },
      { path: paths.app.clientPayments.projectStatement.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsProjectStatementRoute /></Suspense> },
      { path: paths.app.clientPayments.globalSituation.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsGlobalSituationRoute /></Suspense> },
      { path: paths.app.clientPayments.financialSituation.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsFinancialSituationRoute /></Suspense> },
      { path: paths.app.clientPayments.cancelled.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsCancelledRoute /></Suspense> },
      { path: paths.app.clientPayments.unpaid.path, element: <Suspense fallback={<LoadingFallback />}><ClientPaymentsUnpaidRoute /></Suspense> },

      // DELIVERY NOTES
      { path: paths.app.deliveryNotes.todoReports.path, element: <Suspense fallback={<LoadingFallback />}><DeliveryNotesTodoRoute /></Suspense> },
      { path: paths.app.deliveryNotes.editView.path, element: <Suspense fallback={<LoadingFallback />}><DeliveryNotesEditViewRoute /></Suspense> },
      { path: paths.app.deliveryNotes.delivery.path, element: <Suspense fallback={<LoadingFallback />}><DeliveryNotesDeliveryRoute /></Suspense> },

      // PURCHASES
      { path: paths.app.purchases.settings.path, element: <Suspense fallback={<LoadingFallback />}><PurchasesSettingsRoute /></Suspense> },
      { path: paths.app.purchases.supplier.path, element: <Suspense fallback={<LoadingFallback />}><PurchasesSupplierRoute /></Suspense> },
      { path: paths.app.purchases.validateFile.path, element: <Suspense fallback={<LoadingFallback />}><PurchasesValidateFileRoute /></Suspense> },
      { path: paths.app.purchases.file.path, element: <Suspense fallback={<LoadingFallback />}><PurchasesFileRoute /></Suspense> },
      { path: paths.app.purchases.expense.path, element: <Suspense fallback={<LoadingFallback />}><PurchasesExpenseRoute /></Suspense> },
      { path: paths.app.purchases.payments.path, element: <Suspense fallback={<LoadingFallback />}><PurchasesPaymentsRoute /></Suspense> },
      { path: paths.app.purchases.budget.path, element: <Suspense fallback={<LoadingFallback />}><PurchasesBudgetRoute /></Suspense> },

      // PERSONNEL
      { path: paths.app.personnel.employee.path, element: <Suspense fallback={<LoadingFallback />}><PersonnelEmployeeRoute /></Suspense> },
      { path: paths.app.personnel.administrative.path, element: <Suspense fallback={<LoadingFallback />}><PersonnelAdministrativeRoute /></Suspense> },
      { path: paths.app.personnel.experience.path, element: <Suspense fallback={<LoadingFallback />}><PersonnelExperienceRoute /></Suspense> },
      { path: paths.app.personnel.leaveRights.path, element: <Suspense fallback={<LoadingFallback />}><PersonnelLeaveRightsRoute /></Suspense> },
      { path: paths.app.personnel.leave.path, element: <Suspense fallback={<LoadingFallback />}><PersonnelLeaveRoute /></Suspense> },
      { path: paths.app.personnel.payroll.path, element: <Suspense fallback={<LoadingFallback />}><PersonnelPayrollRoute /></Suspense> },

      // TREASURY
      { path: paths.app.treasury.situation.path, element: <Suspense fallback={<LoadingFallback />}><TreasurySituationRoute /></Suspense> },
      { path: paths.app.treasury.bank.path, element: <Suspense fallback={<LoadingFallback />}><TreasuryBankRoute /></Suspense> },
      { path: paths.app.treasury.expenses.path, element: <Suspense fallback={<LoadingFallback />}><TreasuryExpensesRoute /></Suspense> },
      { path: paths.app.treasury.hqCash.path, element: <Suspense fallback={<LoadingFallback />}><TreasuryHqCashRoute /></Suspense> },
      { path: paths.app.treasury.branchCash.path, element: <Suspense fallback={<LoadingFallback />}><TreasuryBranchCashRoute /></Suspense> },
      { path: paths.app.treasury.employeeCash.path, element: <Suspense fallback={<LoadingFallback />}><TreasuryEmployeeCashRoute /></Suspense> },

      // LOGISTICS
      { path: paths.app.logistics.vehicles.path, element: <Suspense fallback={<LoadingFallback />}><LogisticsVehiclesRoute /></Suspense> },
      { path: paths.app.logistics.facilities.path, element: <Suspense fallback={<LoadingFallback />}><LogisticsFacilitiesRoute /></Suspense> },
      { path: paths.app.logistics.equipment.path, element: <Suspense fallback={<LoadingFallback />}><LogisticsEquipmentRoute /></Suspense> },
      { path: paths.app.logistics.otherEquipment.path, element: <Suspense fallback={<LoadingFallback />}><LogisticsOtherEquipmentRoute /></Suspense> },
      { path: paths.app.logistics.creditRent.path, element: <Suspense fallback={<LoadingFallback />}><LogisticsCreditRentRoute /></Suspense> },

      // CLIENTS
      { path: paths.app.clients.update.path, element: <Suspense fallback={<LoadingFallback />}><ClientsUpdateRoute /></Suspense> },
      { path: paths.app.clients.situation.path, element: <Suspense fallback={<LoadingFallback />}><ClientsSituationRoute /></Suspense> },
      { path: paths.app.clients.projectSituation.path, element: <Suspense fallback={<LoadingFallback />}><ClientsProjectSituationRoute /></Suspense> },
      { path: paths.app.clients.billedReports.path, element: <Suspense fallback={<LoadingFallback />}><ClientsBilledReportsRoute /></Suspense> },
      { path: paths.app.clients.invoiceSituation.path, element: <Suspense fallback={<LoadingFallback />}><ClientsInvoiceSituationRoute /></Suspense> },

      // MESSAGING
      { path: paths.app.messaging.sendMail.path, element: <Suspense fallback={<LoadingFallback />}><MessagingSendMailRoute /></Suspense> },
      { path: paths.app.messaging.receiveMail.path, element: <Suspense fallback={<LoadingFallback />}><MessagingReceiveMailRoute /></Suspense> },
      { path: paths.app.messaging.internal.path, element: <Suspense fallback={<LoadingFallback />}><MessagingInternalRoute /></Suspense> },
      { path: paths.app.messaging.appRemark.path, element: <Suspense fallback={<LoadingFallback />}><MessagingAppRemarkRoute /></Suspense> },
      { path: paths.app.messaging.cancelRequest.path, element: <Suspense fallback={<LoadingFallback />}><MessagingCancelRequestRoute /></Suspense> },
      { path: paths.app.messaging.addClient.path, element: <Suspense fallback={<LoadingFallback />}><MessagingAddClientRoute /></Suspense> },

      // DOCUMENTS
      { path: paths.app.documentManagement.upload.path, element: <Suspense fallback={<LoadingFallback />}><DocumentsUploadRoute /></Suspense> },
      { path: paths.app.documentManagement.scan.path, element: <Suspense fallback={<LoadingFallback />}><DocumentsScanRoute /></Suspense> },
      { path: paths.app.documentManagement.search.path, element: <Suspense fallback={<LoadingFallback />}><DocumentsSearchRoute /></Suspense> },
      { path: paths.app.documentManagement.updateRef.path, element: <Suspense fallback={<LoadingFallback />}><DocumentsUpdateRefRoute /></Suspense> },
      { path: paths.app.documentManagement.delete.path, element: <Suspense fallback={<LoadingFallback />}><DocumentsDeleteRoute /></Suspense> },
      { path: paths.app.documentManagement.history.path, element: <Suspense fallback={<LoadingFallback />}><DocumentsHistoryRoute /></Suspense> },

      // SETTINGS
      { path: paths.app.settings.global.path, element: <Suspense fallback={<LoadingFallback />}><SettingsGlobalRoute /></Suspense> },
      { path: paths.app.settings.projects.path, element: <Suspense fallback={<LoadingFallback />}><SettingsProjectsRoute /></Suspense> },
      { path: paths.app.settings.profession.path, element: <Suspense fallback={<LoadingFallback />}><SettingsProfessionRoute /></Suspense> },
      { path: paths.app.settings.graph.path, element: <Suspense fallback={<LoadingFallback />}><SettingsGraphRoute /></Suspense> },
      { path: paths.app.settings.company.path, element: <Suspense fallback={<LoadingFallback />}><SettingsCompanyRoute /></Suspense> },
      { path: paths.app.settings.user.path, element: <Suspense fallback={<LoadingFallback />}><SettingsUserRoute /></Suspense> },
      { path: paths.app.settings.connection.path, element: <Suspense fallback={<LoadingFallback />}><SettingsConnectionRoute /></Suspense> },
      { path: paths.app.settings.initTable.path, element: <Suspense fallback={<LoadingFallback />}><SettingsInitTableRoute /></Suspense> },
      { path: paths.app.settings.objectives.path, element: <Suspense fallback={<LoadingFallback />}><SettingsObjectivesRoute /></Suspense> },
      { path: paths.app.settings.ged.path, element: <Suspense fallback={<LoadingFallback />}><SettingsGedRoute /></Suspense> },

      // RIGHTS
      { path: paths.app.rights.adminMenu.path, element: <Suspense fallback={<LoadingFallback />}><RightsAdminMenuRoute /></Suspense> },
      { path: paths.app.rights.functionalMenu.path, element: <Suspense fallback={<LoadingFallback />}><RightsFunctionalMenuRoute /></Suspense> },
      { path: paths.app.rights.chargeAllocation.path, element: <Suspense fallback={<LoadingFallback />}><RightsChargeAllocationRoute /></Suspense> },
      { path: paths.app.rights.taskList.path, element: <Suspense fallback={<LoadingFallback />}><RightsTaskListRoute /></Suspense> },
      { path: paths.app.rights.client.path, element: <Suspense fallback={<LoadingFallback />}><RightsClientRoute /></Suspense> },
      { path: paths.app.rights.regions.path, element: <Suspense fallback={<LoadingFallback />}><RightsRegionsRoute /></Suspense> },
    ],
  },

  // Redirect root to login
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginRoute /> }],
  },
]);