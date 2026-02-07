export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    login: {
      path: '/auth/login',
      getHref: (redirectTo) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    register: {
      path: '/auth/register',
      getHref: () => '/auth/register',
    },
  },

  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    dashboard: {
      path: '/app/dashboard',
      getHref: () => '/app/dashboard',
    },

    // APPELS D'OFFRES (Tenders)
    tenders: {
      new: { path: '/app/tenders/new', getHref: () => '/app/tenders/new' },
      view: { path: '/app/tenders/view', getHref: () => '/app/tenders/view' },
      participation: { path: '/app/tenders/participation', getHref: () => '/app/tenders/participation' },
      prepare: { path: '/app/tenders/prepare', getHref: () => '/app/tenders/prepare' },
      pending: { path: '/app/tenders/pending', getHref: () => '/app/tenders/pending' },
      awarded: { path: '/app/tenders/awarded', getHref: () => '/app/tenders/awarded' },
      contract: { path: '/app/tenders/contract', getHref: () => '/app/tenders/contract' },
      guaranteeStatus: { path: '/app/tenders/guarantee-status', getHref: () => '/app/tenders/guarantee-status' },
      updateGuarantee: { path: '/app/tenders/update-guarantee', getHref: () => '/app/tenders/update-guarantee' },
      recoverGuarantee: { path: '/app/tenders/recover-guarantee', getHref: () => '/app/tenders/recover-guarantee' },
      results: { path: '/app/tenders/results', getHref: () => '/app/tenders/results' },
      global: { path: '/app/tenders/global', getHref: () => '/app/tenders/global' },
      statistics: { path: '/app/tenders/statistics', getHref: () => '/app/tenders/statistics' },
      qualification: { path: '/app/tenders/qualification', getHref: () => '/app/tenders/qualification' },
    },

    // MARCHÉS (Contracts)
    contracts: {
      new: { path: '/app/contracts/new', getHref: () => '/app/contracts/new' },
      view: { path: '/app/contracts/view', getHref: () => '/app/contracts/view' },
      finalGuarantee: { path: '/app/contracts/final-guarantee', getHref: () => '/app/contracts/final-guarantee' },
    },

    // DEVIS (Quotes)
    quotes: {
      new: { path: '/app/quotes/new', getHref: () => '/app/quotes/new' },
      view: { path: '/app/quotes/view', getHref: () => '/app/quotes/view' },
      orderStatus: { path: '/app/quotes/order-status', getHref: () => '/app/quotes/order-status' },
      priceRef: { path: '/app/quotes/price-reference', getHref: () => '/app/quotes/price-reference' },
      details: { path: '/app/quotes/details', getHref: () => '/app/quotes/details' },
      template: { path: '/app/quotes/template', getHref: () => '/app/quotes/template' },
    },

    // PROJETS (Projects)
    projects: {
      new: { path: '/app/projects/new', getHref: () => '/app/projects/new' },
      edit: { path: '/app/projects/edit', getHref: () => '/app/projects/edit' },
      view: { path: '/app/projects/view', getHref: () => '/app/projects/view' },
      delete: { path: '/app/projects/delete', getHref: () => '/app/projects/delete' },
      subProject: { path: '/app/projects/sub-project', getHref: () => '/app/projects/sub-project' },
      statistics: { path: '/app/projects/statistics', getHref: () => '/app/projects/statistics' },
      status: { path: '/app/projects/status', getHref: () => '/app/projects/status' },
      geolocation: { path: '/app/projects/geolocation', getHref: () => '/app/projects/geolocation' },
      assignments: { path: '/app/projects/assignments', getHref: () => '/app/projects/assignments' },
    },

    // RÉCEPTIONS (Receptions/Testing)
    receptions: {
      new: { path: '/app/receptions/new', getHref: () => '/app/receptions/new' },
      newTraction: { path: '/app/receptions/new-traction', getHref: () => '/app/receptions/new-traction' },
      preReception: { path: '/app/receptions/pre-reception', getHref: () => '/app/receptions/pre-reception' },
      newStudy: { path: '/app/receptions/new-study', getHref: () => '/app/receptions/new-study' },
      delete: { path: '/app/receptions/delete', getHref: () => '/app/receptions/delete' },
      otherMaterialTest: { path: '/app/receptions/other-material-test', getHref: () => '/app/receptions/other-material-test' },
      concreteTest: { path: '/app/receptions/concrete-test', getHref: () => '/app/receptions/concrete-test' },
      cylinderManagement: { path: '/app/receptions/cylinder-management', getHref: () => '/app/receptions/cylinder-management' },
      edit: { path: '/app/receptions/edit', getHref: () => '/app/receptions/edit' },
      otherMaterialsTracking: { path: '/app/receptions/other-materials-tracking', getHref: () => '/app/receptions/other-materials-tracking' },
      concreteTestLab: { path: '/app/receptions/concrete-test-lab', getHref: () => '/app/receptions/concrete-test-lab' },
      testConsultation: { path: '/app/receptions/test-consultation', getHref: () => '/app/receptions/test-consultation' },
      labTreatment: { path: '/app/receptions/lab-treatment', getHref: () => '/app/receptions/lab-treatment' },
      initialization: { path: '/app/receptions/initialization', getHref: () => '/app/receptions/initialization' },
      planning: { path: '/app/receptions/planning', getHref: () => '/app/receptions/planning' },
    },

    // RAPPORTS (Reports)
    reports: {
      todoOtherMaterials: { path: '/app/reports/todo-other-materials', getHref: () => '/app/reports/todo-other-materials' },
      todoConcrete: { path: '/app/reports/todo-concrete', getHref: () => '/app/reports/todo-concrete' },
      todoGlobal: { path: '/app/reports/todo-global', getHref: () => '/app/reports/todo-global' },
      edit: { path: '/app/reports/edit', getHref: () => '/app/reports/edit' },
      viewPrice: { path: '/app/reports/view-price', getHref: () => '/app/reports/view-price' },
      synthesis: { path: '/app/reports/synthesis', getHref: () => '/app/reports/synthesis' },
      deliveryStatus: { path: '/app/reports/delivery-status', getHref: () => '/app/reports/delivery-status' },
      edition: { path: '/app/reports/edition', getHref: () => '/app/reports/edition' },
      study: { path: '/app/reports/study', getHref: () => '/app/reports/study' },
    },

    // FACTURATION (Invoicing)
    invoicing: {
      new: { path: '/app/invoicing/new', getHref: () => '/app/invoicing/new' },
      reportsToBill: { path: '/app/invoicing/reports-to-bill', getHref: () => '/app/invoicing/reports-to-bill' },
      reportsByProject: { path: '/app/invoicing/reports-by-project', getHref: () => '/app/invoicing/reports-by-project' },
      create: { path: '/app/invoicing/create', getHref: () => '/app/invoicing/create' },
      viewEdit: { path: '/app/invoicing/view-edit', getHref: () => '/app/invoicing/view-edit' },
      attachment: { path: '/app/invoicing/attachment', getHref: () => '/app/invoicing/attachment' },
      delivery: { path: '/app/invoicing/delivery', getHref: () => '/app/invoicing/delivery' },
      other: { path: '/app/invoicing/other', getHref: () => '/app/invoicing/other' },
      cancelled: { path: '/app/invoicing/cancelled', getHref: () => '/app/invoicing/cancelled' },
      preInvoice: { path: '/app/invoicing/pre-invoice', getHref: () => '/app/invoicing/pre-invoice' },
      creditNote: { path: '/app/invoicing/credit-note', getHref: () => '/app/invoicing/credit-note' },
    },

    // RÈGLEMENTS CLIENTS (Client Payments)
    clientPayments: {
      new: { path: '/app/client-payments/new', getHref: () => '/app/client-payments/new' },
      advance: { path: '/app/client-payments/advance', getHref: () => '/app/client-payments/advance' },
      view: { path: '/app/client-payments/view', getHref: () => '/app/client-payments/view' },
      pending: { path: '/app/client-payments/pending', getHref: () => '/app/client-payments/pending' },
      invoiceTracking: { path: '/app/client-payments/invoice-tracking', getHref: () => '/app/client-payments/invoice-tracking' },
      clientStatement: { path: '/app/client-payments/client-statement', getHref: () => '/app/client-payments/client-statement' },
      projectStatement: { path: '/app/client-payments/project-statement', getHref: () => '/app/client-payments/project-statement' },
      globalSituation: { path: '/app/client-payments/global-situation', getHref: () => '/app/client-payments/global-situation' },
      financialSituation: { path: '/app/client-payments/financial-situation', getHref: () => '/app/client-payments/financial-situation' },
      cancelled: { path: '/app/client-payments/cancelled', getHref: () => '/app/client-payments/cancelled' },
      unpaid: { path: '/app/client-payments/unpaid', getHref: () => '/app/client-payments/unpaid' },
    },

    // BORDEREAUX (Delivery Notes)
    deliveryNotes: {
      todoReports: { path: '/app/delivery-notes/todo-reports', getHref: () => '/app/delivery-notes/todo-reports' },
      editView: { path: '/app/delivery-notes/edit-view', getHref: () => '/app/delivery-notes/edit-view' },
      delivery: { path: '/app/delivery-notes/delivery', getHref: () => '/app/delivery-notes/delivery' },
    },

    // ACHATS (Purchases)
    purchases: {
      settings: { path: '/app/purchases/settings', getHref: () => '/app/purchases/settings' },
      supplier: { path: '/app/purchases/supplier', getHref: () => '/app/purchases/supplier' },
      validateFile: { path: '/app/purchases/validate-file', getHref: () => '/app/purchases/validate-file' },
      file: { path: '/app/purchases/file', getHref: () => '/app/purchases/file' },
      expense: { path: '/app/purchases/expense', getHref: () => '/app/purchases/expense' },
      payments: { path: '/app/purchases/payments', getHref: () => '/app/purchases/payments' },
      budget: { path: '/app/purchases/budget', getHref: () => '/app/purchases/budget' },
    },

    // PERSONNEL (Staff/HR)
    personnel: {
      employee: { path: '/app/personnel/employee', getHref: () => '/app/personnel/employee' },
      administrative: { path: '/app/personnel/administrative', getHref: () => '/app/personnel/administrative' },
      experience: { path: '/app/personnel/experience', getHref: () => '/app/personnel/experience' },
      leaveRights: { path: '/app/personnel/leave-rights', getHref: () => '/app/personnel/leave-rights' },
      leave: { path: '/app/personnel/leave', getHref: () => '/app/personnel/leave' },
      payroll: { path: '/app/personnel/payroll', getHref: () => '/app/personnel/payroll' },
    },

    // TRÉSORERIE (Treasury)
    treasury: {
      situation: { path: '/app/treasury/situation', getHref: () => '/app/treasury/situation' },
      bank: { path: '/app/treasury/bank', getHref: () => '/app/treasury/bank' },
      expenses: { path: '/app/treasury/expenses', getHref: () => '/app/treasury/expenses' },
      hqCash: { path: '/app/treasury/hq-cash', getHref: () => '/app/treasury/hq-cash' },
      branchCash: { path: '/app/treasury/branch-cash', getHref: () => '/app/treasury/branch-cash' },
      employeeCash: { path: '/app/treasury/employee-cash', getHref: () => '/app/treasury/employee-cash' },
    },

    // LOGISTIQUE (Logistics)
    logistics: {
      vehicles: { path: '/app/logistics/vehicles', getHref: () => '/app/logistics/vehicles' },
      facilities: { path: '/app/logistics/facilities', getHref: () => '/app/logistics/facilities' },
      equipment: { path: '/app/logistics/equipment', getHref: () => '/app/logistics/equipment' },
      otherEquipment: { path: '/app/logistics/other-equipment', getHref: () => '/app/logistics/other-equipment' },
      creditRent: { path: '/app/logistics/credit-rent', getHref: () => '/app/logistics/credit-rent' },
    },

    // CLIENTS
    clients: {
      update: { path: '/app/clients/update', getHref: () => '/app/clients/update' },
      situation: { path: '/app/clients/situation', getHref: () => '/app/clients/situation' },
      projectSituation: { path: '/app/clients/project-situation', getHref: () => '/app/clients/project-situation' },
      billedReports: { path: '/app/clients/billed-reports', getHref: () => '/app/clients/billed-reports' },
      invoiceSituation: { path: '/app/clients/invoice-situation', getHref: () => '/app/clients/invoice-situation' },
    },

    // MESSAGERIE (Messaging)
    messaging: {
      sendMail: { path: '/app/messaging/send-mail', getHref: () => '/app/messaging/send-mail' },
      receiveMail: { path: '/app/messaging/receive-mail', getHref: () => '/app/messaging/receive-mail' },
      internal: { path: '/app/messaging/internal', getHref: () => '/app/messaging/internal' },
      appRemark: { path: '/app/messaging/app-remark', getHref: () => '/app/messaging/app-remark' },
      cancelRequest: { path: '/app/messaging/cancel-request', getHref: () => '/app/messaging/cancel-request' },
      addClient: { path: '/app/messaging/add-client', getHref: () => '/app/messaging/add-client' },
    },

    // G.E.D (Document Management)
    documentManagement: {
      upload: { path: '/app/documents/upload', getHref: () => '/app/documents/upload' },
      scan: { path: '/app/documents/scan', getHref: () => '/app/documents/scan' },
      search: { path: '/app/documents/search', getHref: () => '/app/documents/search' },
      updateRef: { path: '/app/documents/update-ref', getHref: () => '/app/documents/update-ref' },
      delete: { path: '/app/documents/delete', getHref: () => '/app/documents/delete' },
      history: { path: '/app/documents/history', getHref: () => '/app/documents/history' },
    },

    // PARAMÉTRAGE (Settings)
    settings: {
      global: { path: '/app/settings/global', getHref: () => '/app/settings/global' },
      projects: { path: '/app/settings/projects', getHref: () => '/app/settings/projects' },
      profession: { path: '/app/settings/profession', getHref: () => '/app/settings/profession' },
      graph: { path: '/app/settings/graph', getHref: () => '/app/settings/graph' },
      company: { path: '/app/settings/company', getHref: () => '/app/settings/company' },
      user: { path: '/app/settings/user', getHref: () => '/app/settings/user' },
      connection: { path: '/app/settings/connection', getHref: () => '/app/settings/connection' },
      initTable: { path: '/app/settings/init-table', getHref: () => '/app/settings/init-table' },
      objectives: { path: '/app/settings/objectives', getHref: () => '/app/settings/objectives' },
      ged: { path: '/app/settings/ged', getHref: () => '/app/settings/ged' },
    },

    // DROITS (Rights/Permissions)
    rights: {
      adminMenu: { path: '/app/rights/admin-menu', getHref: () => '/app/rights/admin-menu' },
      functionalMenu: { path: '/app/rights/functional-menu', getHref: () => '/app/rights/functional-menu' },
      chargeAllocation: { path: '/app/rights/charge-allocation', getHref: () => '/app/rights/charge-allocation' },
      taskList: { path: '/app/rights/task-list', getHref: () => '/app/rights/task-list' },
      client: { path: '/app/rights/client', getHref: () => '/app/rights/client' },
      regions: { path: '/app/rights/regions', getHref: () => '/app/rights/regions' },
    },
  },
};