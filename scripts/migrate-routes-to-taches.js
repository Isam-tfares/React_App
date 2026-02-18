#!/usr/bin/env node

/**
 * Migration Script: Convert all route components from
 *   <Authorization permission="module:action" ...>
 * to
 *   <Authorization tache="nom_tache" ...>
 *
 * Run from project root:
 *   node scripts/migrate-routes-to-taches.js
 *
 * Add --dry-run to preview without writing:
 *   node scripts/migrate-routes-to-taches.js --dry-run
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');

// ══════��════════════════════════════════════════════════════════
// MAPPING: route file path (relative to src/app/routes/app/) → nom_tache
// This is the SINGLE SOURCE OF TRUTH for the migration.
// ═══════════════════════════════════════════════════════════════
const ROUTE_TO_TACHE = {
  // ── TENDERS (AO) ──────────────────────────────────────────
  'tenders/new.jsx':                'AO_Créer',
  'tenders/view.jsx':               'Nouveau_AO',
  'tenders/participation.jsx':      'Avis_de_participation',
  'tenders/prepare.jsx':            'Préparation_AO',
  'tenders/pending.jsx':            'En_attente_résultat',
  'tenders/awarded.jsx':            'Attribué',
  'tenders/contract.jsx':           'Appel_offre', // AO menu-level tache
  'tenders/guarantee-status.jsx':   'Situation_caution',
  'tenders/update-guarantee.jsx':   'Maj_Caution',
  'tenders/recover-guarantee.jsx':  'Caution_à_recupere',
  'tenders/results.jsx':            'En_attente_résultat', // results page
  'tenders/global.jsx':             'Consultation_Globale',
  'tenders/statistics.jsx':         'Statistique_Ao',
  'tenders/qualification.jsx':      'BTN_Nouveau_qualif',

  // ── CONTRACTS (MARCHE) ────────────────────────────────────
  'contracts/new.jsx':              'Nouveau2',
  'contracts/view.jsx':             'Consulter',
  'contracts/final-guarantee.jsx':  'Caution_définitive',

  // ── QUOTES (DEVIS) ────────────────────────────────────────
  'quotes/new.jsx':                 'Nouveau_devis1',
  'quotes/view.jsx':                'Bon_de_commande',
  'quotes/order-status.jsx':        'Situation_BC',
  'quotes/price-reference.jsx':     'Referenciel_Prix',
  'quotes/details.jsx':             'etatdevis',
  'quotes/template.jsx':            'BTN_Modifier_devis',

  // ── PROJECTS (PROJETS) ────────────────────────────────────
  'projects/new.jsx':               'Nouveau3',
  'projects/edit.jsx':              'Modifier1',
  'projects/view.jsx':              'Suivi_projet',
  'projects/delete.jsx':            'Supprimer1',
  'projects/sub-project.jsx':       'Sous_projet',
  'projects/statistics.jsx':        'Statistique',
  'projects/status.jsx':            'Situation_projets',
  'projects/geolocation.jsx':       'tableau_de_bord',
  'projects/assignments.jsx':       'BTN_Supprimer_projets2',

  // ── RECEPTIONS ────────────────────────────────────────────
  'receptions/new.jsx':                     'Nouveau5',
  'receptions/new-traction.jsx':            'Nouveau5',        // same tache, sub-type
  'receptions/pre-reception.jsx':           'Nouveau5',        // same tache, sub-type
  'receptions/new-study.jsx':               'Nouveau5',        // same tache, sub-type
  'receptions/delete.jsx':                  'Consulter2',
  'receptions/other-material-test.jsx':     'Essai_autre_materiaux',
  'receptions/concrete-test.jsx':           'Essai_Beton',
  'receptions/cylinder-management.jsx':     'Gestion_cylindre',
  'receptions/edit.jsx':                    'Modifier_test',
  'receptions/other-materials-tracking.jsx':'Suivi_Reception',
  'receptions/concrete-test-lab.jsx':       'Essai_beton_LABO',
  'receptions/test-consultation.jsx':       'Connsultation_essai_Interne_Exetrne',
  'receptions/lab-treatment.jsx':           'Traitement_des_essais_Labo',
  'receptions/initialization.jsx':          'Initialisation',
  'receptions/planning.jsx':                'Liste_reception_pour_Analyse',

  // ── REPORTS (RAPPORTS) ────────────────────────────────────
  'reports/todo-other-materials.jsx':  'Autre_Matériaux',
  'reports/todo-concrete.jsx':         'Béton2',
  'reports/todo-global.jsx':           'Autre_Matériaux', // global view
  'reports/edit.jsx':                  'Modifier2',
  'reports/view-price.jsx':            'Consulter3',
  'reports/synthesis.jsx':             'Consulter_par_réfèrence',
  'reports/delivery-status.jsx':       'Etat_livraison_rapports',
  'reports/edition.jsx':               'Edition_Rapport',
  'reports/study.jsx':                 'Rapport_d_étude',

  // ── INVOICING (FACTURATION) ───────────────────────────────
  'invoicing/new.jsx':                'Creation_facture1',
  'invoicing/reports-to-bill.jsx':    'Rapport_à_facturer',
  'invoicing/reports-by-project.jsx': 'Rapport_à_facturer_Global',
  'invoicing/create.jsx':             'Creation_facture1',
  'invoicing/view-edit.jsx':          'Consultation_Edition',
  'invoicing/attachment.jsx':         'Attachement',
  'invoicing/delivery.jsx':           'Etat_livraison_Factures',
  'invoicing/other.jsx':              'Autres_factures',
  'invoicing/cancelled.jsx':          'Factures_annulées',
  'invoicing/pre-invoice.jsx':        'Pré_facture_BL',
  'invoicing/credit-note.jsx':        'Facture_avoir',

  // ── CLIENT PAYMENTS (REGLEMENT CLIENT) ────────────────────
  'client-payments/new.jsx':                'Nv_reg_clt',
  'client-payments/advance.jsx':            'Avance',
  'client-payments/view.jsx':               'Consulter_rg_clt',
  'client-payments/pending.jsx':            'En_instance',
  'client-payments/invoice-tracking.jsx':   'Suivi_reglement',
  'client-payments/client-statement.jsx':   'Relevé_Client',
  'client-payments/project-statement.jsx':  'Situation_Globale',
  'client-payments/global-situation.jsx':   'Situation_Globale',
  'client-payments/financial-situation.jsx':'Situation_globale2',
  'client-payments/cancelled.jsx':          'Règlement_annulés',
  'client-payments/unpaid.jsx':             'Suivi_reglement',

  // ── DELIVERY NOTES (BORDEREAUX) ───────────────────────────
  'delivery-notes/todo-reports.jsx':   'Bordereau_à_faire',
  'delivery-notes/edit-view.jsx':      'Creation',
  'delivery-notes/delivery.jsx':       'Consultation',

  // ── PURCHASES (ACHATS) ────────────────────────────────────
  'purchases/settings.jsx':        'Paramétrage_DA',
  'purchases/supplier.jsx':        'OPT_Fournisseur',
  'purchases/validate-file.jsx':   'Demande_et_Validation',
  'purchases/file.jsx':            'Dossier_Achat',
  'purchases/expense.jsx':         'Facture_FOURNISSEUR',
  'purchases/payments.jsx':        'Reglement',
  'purchases/budget.jsx':          'Budget',

  // ── PERSONNEL ─────────────────────────────────────────────
  'personnel/employee.jsx':        'OPT_Dossier_Salarié',
  'personnel/administrative.jsx':  'Dossier_Administratif',
  'personnel/experience.jsx':      'OPT_Dossier_Salarié', // same parent
  'personnel/leave-rights.jsx':    'Droit_congé',
  'personnel/leave.jsx':           'OPT_Congé',
  'personnel/payroll.jsx':         'Préparation_paie',

  // ── TREASURY (TRESORERIE) ─────────────────────────────────
  'treasury/situation.jsx':        'Situation1',
  'treasury/bank.jsx':             'Banque1',
  'treasury/expenses.jsx':         'Dépenses',
  'treasury/hq-cash.jsx':          'Caisse_siège',
  'treasury/branch-cash.jsx':      'Caisse_agence',
  'treasury/employee-cash.jsx':    'Caisse_employé',

  // ── LOGISTICS (Logistique) ────────────────────────────────
  'logistics/vehicles.jsx':        'Véhicules',
  'logistics/facilities.jsx':      'Loyer',
  'logistics/equipment.jsx':       'Matériel',
  'logistics/other-equipment.jsx': 'Autres1',
  'logistics/credit-rent.jsx':     'Autres_Mouvements',

  // ── CLIENTS ───────────────────────────────────────────────
  'clients/update.jsx':             'Mise_à_jours',
  'clients/situation.jsx':          'Situation_Clients',
  'clients/project-situation.jsx':  'Situation_Client',
  'clients/billed-reports.jsx':     'Situation_Client_Globale',
  'clients/invoice-situation.jsx':  'Situation_client_Facture',

  // ── MESSAGING (Messagerie) ────────────────────────────────
  'messaging/send-mail.jsx':       'Envoi_courrier',
  'messaging/receive-mail.jsx':    'Reception1',
  'messaging/internal.jsx':        'Message',
  'messaging/app-remark.jsx':      'Demande_annulation',
  'messaging/cancel-request.jsx':  'Creation_Consultation',
  'messaging/add-client.jsx':      'Demande_ajout_client',

  // ── DOCUMENTS (GED) ──────────────────────────────────────
  'documents/upload.jsx':          'Telecharger_document',
  'documents/scan.jsx':            'Scanner_document_papier',
  'documents/search.jsx':          'Rechercher_documents',
  'documents/update-ref.jsx':      'maj_referencement',
  'documents/delete.jsx':          'Supprimer_document',
  'documents/history.jsx':         'maj_referencement',

  // ── SETTINGS (PARAMETRAGE) ────────────────────────────────
  'settings/global.jsx':           'Global1',
  'settings/projects.jsx':         'Initiation_Table',
  'settings/profession.jsx':       'Initiation_Table',
  'settings/graph.jsx':            'Initiation_Table',
  'settings/company.jsx':          'Société',
  'settings/user.jsx':             'Utilisateur',
  'settings/connection.jsx':       'Connexion',
  'settings/init-table.jsx':       'Initiation_Table',
  'settings/objectives.jsx':       'Objectifs',
  'settings/ged.jsx':              'Initiation_Table',

  // ── RIGHTS (DROITS) ──────────────────────────────────────
  'rights/admin-menu.jsx':         'Mnu',
  'rights/functional-menu.jsx':    'Menu_Fonctionnelle',
  'rights/charge-allocation.jsx':  'Agence',
  'rights/task-list.jsx':          'Tâches',
  'rights/client.jsx':             'Client',
  'rights/regions.jsx':            'Agence',  // same tache
};

// ═══════════════════════════════════════════════════════════════
// SCRIPT LOGIC
// ═══════════════════════════════════════════════════════════════

const ROUTES_DIR = path.join(__dirname, '..', 'src', 'app', 'routes', 'app');

let filesProcessed = 0;
let filesUpdated = 0;
let filesSkipped = 0;
let filesNotMapped = 0;
const errors = [];

/**
 * Recursively get all .jsx files in a directory
 */
function getJsxFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getJsxFiles(fullPath));
    } else if (entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Get the route key for the mapping (e.g., "tenders/view.jsx")
 */
function getRouteKey(filePath) {
  const relative = path.relative(ROUTES_DIR, filePath);
  // Normalize to forward slashes
  return relative.replace(/\\/g, '/');
}

/**
 * Transform a file's content: replace permission="..." with tache="..."
 */
function transformFile(filePath) {
  const routeKey = getRouteKey(filePath);
  const tacheName = ROUTE_TO_TACHE[routeKey];

  filesProcessed++;

  if (!tacheName) {
    filesNotMapped++;
    console.log(`  ⚠️  NO MAPPING: ${routeKey}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if file uses Authorization with permission=
  const permissionRegex = /<Authorization\s+permission="[^"]*"/g;
  const matches = content.match(permissionRegex);

  if (!matches) {
    filesSkipped++;
    console.log(`  ⏭️  NO MATCH:   ${routeKey} (no <Authorization permission=...> found)`);
    return;
  }

  // Replace all occurrences of permission="..." with tache="..."
  const newContent = content.replace(
    /(<Authorization\s+)permission="[^"]*"/g,
    `$1tache="${tacheName}"`
  );

  if (newContent === content) {
    filesSkipped++;
    console.log(`  ⏭️  UNCHANGED:  ${routeKey}`);
    return;
  }

  if (DRY_RUN) {
    console.log(`  🔍 WOULD UPDATE: ${routeKey}  →  tache="${tacheName}"`);
  } else {
    try {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`  ✅ UPDATED:     ${routeKey}  →  tache="${tacheName}"`);
    } catch (err) {
      errors.push({ file: routeKey, error: err.message });
      console.log(`  ❌ ERROR:       ${routeKey} - ${err.message}`);
    }
  }
  filesUpdated++;
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

console.log('');
console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║  Migrate Route Files: permission → tache               ║');
console.log('╚══════════════════════════════════════════════════════════╝');
console.log('');

if (DRY_RUN) {
  console.log('🔍 DRY RUN MODE — no files will be modified.\n');
}

if (!fs.existsSync(ROUTES_DIR)) {
  console.error(`❌ Routes directory not found: ${ROUTES_DIR}`);
  console.error('   Make sure you run this script from the project root.');
  process.exit(1);
}

const files = getJsxFiles(ROUTES_DIR);

// Filter out files inside the weird nested "src/app/routes/app/src/..." path
const cleanFiles = files.filter(f => {
  const rel = path.relative(ROUTES_DIR, f).replace(/\\/g, '/');
  return !rel.startsWith('src/');
});

console.log(`Found ${cleanFiles.length} route files in ${ROUTES_DIR}\n`);

// Also skip the dashboard route (always accessible)
const SKIP_FILES = ['dashboard.jsx', 'dashboard/index.jsx'];

for (const filePath of cleanFiles) {
  const routeKey = getRouteKey(filePath);
  if (SKIP_FILES.includes(routeKey)) {
    console.log(`  ⏭️  SKIP:       ${routeKey} (always accessible)`);
    filesSkipped++;
    continue;
  }
  transformFile(filePath);
}

// ═══════════════════════════════════════════════════════════════
// SUMMARY
// ═══════════════════════════════════════════════════════════════

console.log('\n══════════════════════════════════════════════════════════');
console.log('SUMMARY');
console.log('══════════════════════════════════════════���═══════════════');
console.log(`  Files scanned:    ${filesProcessed}`);
console.log(`  Files updated:    ${filesUpdated}`);
console.log(`  Files skipped:    ${filesSkipped}`);
console.log(`  Files not mapped: ${filesNotMapped}`);
if (errors.length > 0) {
  console.log(`  Errors:           ${errors.length}`);
  errors.forEach(e => console.log(`    - ${e.file}: ${e.error}`));
}
console.log('');

if (DRY_RUN) {
  console.log('👆 This was a DRY RUN. Run without --dry-run to apply changes.');
}

if (filesNotMapped > 0) {
  console.log('\n⚠️  Some files had no mapping. Add them to ROUTE_TO_TACHE in the script.');
}

console.log('');