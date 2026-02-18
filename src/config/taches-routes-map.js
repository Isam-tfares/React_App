/**
 * Maps each `nom_tache` (from the taches table in BD) to a route path in the app.
 * 
 * Structure:
 *   nom_tache → { path, module }
 * 
 * The `module` field groups taches for sidebar menu visibility.
 * A parent menu (e.g., "Appels d'Offres") is shown if the user has ANY tache in that module.
 */

import { paths } from './paths';

export const TACHE_ROUTE_MAP = {
  // ═══════════════════════════════════════════
  // AO (Appels d'Offres / Tenders)
  // ═══════════════════════════════════════════
  'Appel_offre':              { path: null, module: 'AO', isMenu: true },  // Parent menu
  'AO_Créer':                 { path: paths.app.tenders.new.path, module: 'AO' },
  'Nouveau_AO':               { path: paths.app.tenders.view.path, module: 'AO' },
  'Avis_de_participation':    { path: paths.app.tenders.participation.path, module: 'AO' },
  'Préparation_AO':           { path: paths.app.tenders.prepare.path, module: 'AO' },
  'Situation_caution':        { path: paths.app.tenders.guaranteeStatus.path, module: 'AO' },
  'Consultation_Globale':     { path: paths.app.tenders.global.path, module: 'AO' },
  'En_attente_résultat':      { path: paths.app.tenders.pending.path, module: 'AO' },
  'Attribué':                 { path: paths.app.tenders.awarded.path, module: 'AO' },
  'Caution_à_recupere':       { path: paths.app.tenders.recoverGuarantee.path, module: 'AO' },
  'Maj_Caution':              { path: paths.app.tenders.updateGuarantee.path, module: 'AO' },
  'Statistique_Ao':           { path: paths.app.tenders.statistics.path, module: 'AO' },
  'BTN_Nouveau_qualif':       { path: paths.app.tenders.qualification.path, module: 'AO' },
  'BTN_modife_qualif':        { path: null, module: 'AO', isAction: true },
  'BTN_modife_Condition':     { path: null, module: 'AO', isAction: true },

  // ═══════════════════════════════════════════
  // MARCHE (Contracts)
  // ═══════════════════════════════════════════
  'Marché1':                  { path: null, module: 'MARCHE', isMenu: true },
  'Nouveau2':                 { path: paths.app.contracts.new.path, module: 'MARCHE' },
  'Consulter':                { path: paths.app.contracts.view.path, module: 'MARCHE' },
  'Caution_définitive':       { path: paths.app.contracts.finalGuarantee.path, module: 'MARCHE' },

  // ═══════════════════════════════════════════
  // DEVIS (Quotes)
  // ═══════════════════════════════════════════
  'Devis':                    { path: null, module: 'DEVIS', isMenu: true },
  'Nouveau_devis1':           { path: paths.app.quotes.new.path, module: 'DEVIS' },
  'Bon_de_commande':          { path: paths.app.quotes.view.path, module: 'DEVIS' },
  'Situation_BC':             { path: paths.app.quotes.orderStatus.path, module: 'DEVIS' },
  'Referenciel_Prix':         { path: paths.app.quotes.priceRef.path, module: 'DEVIS' },
  'BTN_Nouveau23':            { path: null, module: 'DEVIS', isAction: true },
  'BTN_Modifier23':           { path: null, module: 'DEVIS', isAction: true },
  'BTN_Supprimer23':          { path: null, module: 'DEVIS', isAction: true },
  'etatdevis':                { path: null, module: 'DEVIS', isAction: true },
  'BTN_Lien26':               { path: null, module: 'DEVIS', isAction: true },
  'BTN_Nouveau22':            { path: null, module: 'DEVIS', isAction: true },
  'BTN_Modifier22':           { path: null, module: 'DEVIS', isAction: true },
  'BTN_Modifier_devis':       { path: null, module: 'DEVIS', isAction: true },

  // ═══════════════════════════════════════════
  // PROJETS (Projects)
  // ═══════════════════════════════════════════
  'OPT_Projets':              { path: null, module: 'PROJETS', isMenu: true },
  'Nouveau3':                 { path: paths.app.projects.new.path, module: 'PROJETS' },
  'Modifier1':                { path: paths.app.projects.edit.path, module: 'PROJETS' },
  'Suivi_projet':             { path: paths.app.projects.view.path, module: 'PROJETS' },
  'Supprimer1':               { path: paths.app.projects.delete.path, module: 'PROJETS' },
  'Sous_projet':              { path: paths.app.projects.subProject.path, module: 'PROJETS' },
  'Statistique':              { path: paths.app.projects.statistics.path, module: 'PROJETS' },
  'Situation_projets':        { path: paths.app.projects.status.path, module: 'PROJETS' },
  'tableau_de_bord':          { path: paths.app.projects.geolocation.path, module: 'PROJETS' },
  'BTN_Supprimer_projets2':   { path: null, module: 'PROJETS', isAction: true },

  // ═══════════════════════════════════════════
  // RECEPTION
  // ═══════════════════════════════════════════
  'Men_Reception':            { path: null, module: 'RECEPTION', isMenu: true },
  'Nouveau5':                 { path: paths.app.receptions.new.path, module: 'RECEPTION' },
  'Consulter2':               { path: paths.app.receptions.delete.path, module: 'RECEPTION' },
  'Essai_autre_materiaux':    { path: paths.app.receptions.otherMaterialTest.path, module: 'RECEPTION' },
  'Essai_Beton':              { path: paths.app.receptions.concreteTest.path, module: 'RECEPTION' },
  'Gestion_cylindre':         { path: paths.app.receptions.cylinderManagement.path, module: 'RECEPTION' },
  'Modifier_test':            { path: paths.app.receptions.edit.path, module: 'RECEPTION' },
  'Suivi_Reception':          { path: paths.app.receptions.otherMaterialsTracking.path, module: 'RECEPTION' },
  'Essai_beton_LABO':         { path: paths.app.receptions.concreteTestLab.path, module: 'RECEPTION' },
  'Connsultation_essai_Interne_Exetrne': { path: paths.app.receptions.testConsultation.path, module: 'RECEPTION' },
  'Traitement_des_essais_Labo': { path: paths.app.receptions.labTreatment.path, module: 'RECEPTION' },
  'Initialisation':           { path: paths.app.receptions.initialization.path, module: 'RECEPTION' },
  'Liste_reception_pour_Analyse': { path: paths.app.receptions.planning.path, module: 'RECEPTION' },
  'Paramétrage1':             { path: null, module: 'RECEPTION', isAction: true },
  'Validation_essai':         { path: null, module: 'RECEPTION', isAction: true },
  'Recupéré':                 { path: null, module: 'RECEPTION', isAction: true },
  'non_recupéré':             { path: null, module: 'RECEPTION', isAction: true },
  'Saisir_donnée_d_essai':    { path: null, module: 'RECEPTION', isAction: true },
  'Affectation_Essai_labo':   { path: null, module: 'RECEPTION', isAction: true },
  'Analyse_labo':             { path: null, module: 'RECEPTION', isAction: true },
  'BTN_Modifier_projets2':    { path: null, module: 'RECEPTION', isAction: true },
  'BTN_Modifier_num_reception': { path: null, module: 'RECEPTION', isAction: true },
  'BTN_Supprimer_projets8':   { path: null, module: 'RECEPTION', isAction: true },
  'Consultation1':            { path: null, module: 'RECEPTION', isAction: true },

  // ═══════════════════════════════════════════
  // RAPPORTS (Reports)
  // ═══════════════════════════════════════════
  'MENU_Rapport':             { path: null, module: 'RAPPORTS', isMenu: true },
  'Autre_Matériaux':          { path: paths.app.reports.todoOtherMaterials.path, module: 'RAPPORTS' },
  'Béton2':                   { path: paths.app.reports.todoConcrete.path, module: 'RAPPORTS' },
  'Modifier2':                { path: paths.app.reports.edit.path, module: 'RAPPORTS' },
  'Consulter3':               { path: paths.app.reports.viewPrice.path, module: 'RAPPORTS' },
  'Etat_livraison_rapports':  { path: paths.app.reports.deliveryStatus.path, module: 'RAPPORTS' },
  'Consulter_par_réfèrence':  { path: paths.app.reports.synthesis.path, module: 'RAPPORTS' },
  'Edition_Rapport':          { path: paths.app.reports.edition.path, module: 'RAPPORTS' },
  'Rapport_d_étude':          { path: paths.app.reports.study.path, module: 'RAPPORTS' },
  'BTN_Modifier_projets17':   { path: null, module: 'RAPPORTS', isAction: true },
  'BTN_Modifier_projets6':    { path: null, module: 'RAPPORTS', isAction: true },
  'Annuler_Rapport':          { path: null, module: 'RAPPORTS', isAction: true },
  'Annuler_un_rapport':       { path: null, module: 'RAPPORTS', isAction: true },
  'Création1':                { path: null, module: 'RAPPORTS', isAction: true },
  'Consulter1':               { path: null, module: 'RAPPORTS', isAction: true },
  'En_instance1':             { path: null, module: 'RAPPORTS', isAction: true },

  // ═══════════════════════════════════════════
  // FACTURATION (Invoicing)
  // ═══════════════════════════════════════════
  'Facturation1':             { path: null, module: 'FACTURATION', isMenu: true },
  'Rapport_à_facturer':       { path: paths.app.invoicing.reportsToBill.path, module: 'FACTURATION' },
  'Rapport_à_facturer_Global':{ path: paths.app.invoicing.reportsByProject.path, module: 'FACTURATION' },
  'Creation_facture1':        { path: paths.app.invoicing.create.path, module: 'FACTURATION' },
  'Consultation_Edition':     { path: paths.app.invoicing.viewEdit.path, module: 'FACTURATION' },
  'Attachement':              { path: paths.app.invoicing.attachment.path, module: 'FACTURATION' },
  'Etat_livraison_Factures':  { path: paths.app.invoicing.delivery.path, module: 'FACTURATION' },
  'Autres_factures':          { path: paths.app.invoicing.other.path, module: 'FACTURATION' },
  'Factures_annulées':        { path: paths.app.invoicing.cancelled.path, module: 'FACTURATION' },
  'Pré_facture_BL':           { path: paths.app.invoicing.preInvoice.path, module: 'FACTURATION' },
  'Facture_avoir':            { path: paths.app.invoicing.creditNote.path, module: 'FACTURATION' },
  'Annuler_Facture':          { path: null, module: 'FACTURATION', isAction: true },
  'BTN_Modifier_client_facture': { path: null, module: 'FACTURATION', isAction: true },

  // ═══════════════════════════════════════════
  // REGLEMENT CLIENT (Client Payments)
  // ═══════════════════════════════════════════
  'OPT_REG_CLT':              { path: null, module: 'REGLEMENT CLIENT', isMenu: true },
  'Nv_reg_clt':               { path: paths.app.clientPayments.new.path, module: 'REGLEMENT CLIENT' },
  'Avance':                   { path: paths.app.clientPayments.advance.path, module: 'REGLEMENT CLIENT' },
  'Consulter_rg_clt':         { path: paths.app.clientPayments.view.path, module: 'REGLEMENT CLIENT' },
  'En_instance':              { path: paths.app.clientPayments.pending.path, module: 'REGLEMENT CLIENT' },
  'Suivi_reglement':          { path: paths.app.clientPayments.invoiceTracking.path, module: 'REGLEMENT CLIENT' },
  'Relevé_Client':            { path: paths.app.clientPayments.clientStatement.path, module: 'REGLEMENT CLIENT' },
  'Situation_Globale':        { path: paths.app.clientPayments.projectStatement.path, module: 'REGLEMENT CLIENT' },
  'Situation_globale2':       { path: paths.app.clientPayments.financialSituation.path, module: 'REGLEMENT CLIENT' },
  'Règlement_annulés':        { path: paths.app.clientPayments.cancelled.path, module: 'REGLEMENT CLIENT' },
  'Annuler_Règlement':        { path: null, module: 'REGLEMENT CLIENT', isAction: true },
  'BTN_Modifier_reglement':   { path: null, module: 'REGLEMENT CLIENT', isAction: true },

  // ═══════════════════════════════════════════
  // BORDEREAUX (Delivery Notes)
  // ═══════════════════════════════════════════
  'Borderaux':                { path: null, module: 'BORDEREAUX', isMenu: true },
  'Bordereau_à_faire':        { path: paths.app.deliveryNotes.todoReports.path, module: 'BORDEREAUX' },
  'Creation':                 { path: paths.app.deliveryNotes.editView.path, module: 'BORDEREAUX' },
  'Consultation':             { path: paths.app.deliveryNotes.delivery.path, module: 'BORDEREAUX' },

  // ═══════════════════════════════════════════
  // ACHATS (Purchases)
  // ═══════════════════════════════════════════
  'Achats':                   { path: null, module: 'ACHATS', isMenu: true },
  'OPT_Fournisseur':          { path: paths.app.purchases.supplier.path, module: 'ACHATS' },
  'Mise_à_jours1':            { path: null, module: 'ACHATS', isAction: true },
  'Demande_et_Validation':    { path: paths.app.purchases.validateFile.path, module: 'ACHATS' },
  'Dossier_Achat':            { path: paths.app.purchases.file.path, module: 'ACHATS' },
  'Facture_FOURNISSEUR':      { path: paths.app.purchases.expense.path, module: 'ACHATS' },
  'Reglement':                { path: paths.app.purchases.payments.path, module: 'ACHATS' },
  'Budget':                   { path: paths.app.purchases.budget.path, module: 'ACHATS' },
  'Demandes_achats':          { path: null, module: 'ACHATS', isAction: true },
  'Validation_agence_DA':     { path: null, module: 'ACHATS', isAction: true },
  'Validation_siège1':        { path: null, module: 'ACHATS', isAction: true },
  'Consultation_achat':       { path: null, module: 'ACHATS', isAction: true },
  'Transfert_Demande_valider':{ path: null, module: 'ACHATS', isAction: true },
  'Consultation_des_achats':  { path: null, module: 'ACHATS', isAction: true },
  'Historique_Validation':    { path: null, module: 'ACHATS', isAction: true },
  'Familles_d_article':       { path: null, module: 'ACHATS', isAction: true },
  'Référetiels_articles':     { path: null, module: 'ACHATS', isAction: true },
  'Paramétrage_DA':           { path: null, module: 'ACHATS', isAction: true },
  'Situation_Globale1':       { path: null, module: 'ACHATS', isAction: true },

  // there is 36 taches to add later

  // ═══════════════════════════════════════════
  // PERSONNEL
  // ═══════════════════════════════════════════
  'OPT_Personnel':            { path: null, module: 'PERSONNEL', isMenu: true },
  'OPT_Dossier_Salarié':      { path: paths.app.personnel.employee.path, module: 'PERSONNEL' },
  'Dossier_Administratif':    { path: paths.app.personnel.administrative.path, module: 'PERSONNEL' },
  'OPT_Congé':                { path: paths.app.personnel.leave.path, module: 'PERSONNEL' },
  'Demande_congé1':           { path: null, module: 'PERSONNEL', isAction: true },
  'Validation_agence':        { path: null, module: 'PERSONNEL', isAction: true },
  'Validation_siège':         { path: null, module: 'PERSONNEL', isAction: true },
  'Droit_congé':              { path: paths.app.personnel.leaveRights.path, module: 'PERSONNEL' },
  'Préparation_paie':         { path: paths.app.personnel.payroll.path, module: 'PERSONNEL' },
  'OPT_Paie':                 { path: null, module: 'PERSONNEL', isAction: true },

  // there is 18 taches to add later

  // ═══════════════════════════════════════════
  // TRESORERIE (Treasury)
  // ═══════════════════════════════════════════
  'Trésoreri':                { path: null, module: 'TRESORERIE', isMenu: true },
  'Situation1':               { path: paths.app.treasury.situation.path, module: 'TRESORERIE' },
  'Banque1':                  { path: paths.app.treasury.bank.path, module: 'TRESORERIE' },
  'Dépenses':                 { path: paths.app.treasury.expenses.path, module: 'TRESORERIE' },
  'Caisse_siège':             { path: paths.app.treasury.hqCash.path, module: 'TRESORERIE' },
  'Caisse_agence':            { path: paths.app.treasury.branchCash.path, module: 'TRESORERIE' },
  'Caisse_employé':           { path: paths.app.treasury.employeeCash.path, module: 'TRESORERIE' },
  'Sortie_caisse':            { path: null, module: 'TRESORERIE', isAction: true },
  'Situation_Sortie_de_caisse': { path: paths.app.treasury.situation.path, module: 'TRESORERIE', isAction: true },
  'Note_de_frais1':           { path: null, module: 'TRESORERIE', isAction: true },
  'Saisir_Avance':            { path: null, module: 'TRESORERIE', isAction: true },
  'Gestion_Avances':          { path: null, module: 'TRESORERIE', isAction: true },
  // exist 34 taches to add later

  // ═══════════════════════════════════════════
  // LOGISTIQUE (Logistics)
  // ═══════════════════════════════════════════
  'Logistique':               { path: null, module: 'Logistique', isMenu: true },
  'Véhicules':                { path: paths.app.logistics.vehicles.path, module: 'Logistique' },
  'Loyer':                    { path: paths.app.logistics.facilities.path, module: 'Logistique' },
  'Matériel':                 { path: paths.app.logistics.equipment.path, module: 'Logistique' },
  'Autres1':                  { path: paths.app.logistics.otherEquipment.path, module: 'Logistique' },
  'Autres_Mouvements':        { path: paths.app.logistics.creditRent.path, module: 'Logistique' },

  // ═══════════════════════════════════════════
  // CLIENTS
  // ═══════════════════════════════════════════
  'Clients':                  { path: null, module: 'CLIENTS', isMenu: true },
  'Mise_à_jours':             { path: paths.app.clients.update.path, module: 'CLIENTS' },
  'Situation_Client':         { path: paths.app.clients.projectSituation.path, module: 'CLIENTS' }, // client/projet
  'Situation_Clients':        { path: paths.app.clients.situation.path, module: 'CLIENTS' }, // situtaion clients
  'Situation_Client_Globale': { path: paths.app.clients.billedReports.path, module: 'CLIENTS' },
  'Situation_client_Facture': { path: paths.app.clients.invoiceSituation.path, module: 'CLIENTS' },
  'BTN_Nouveau2':             { path: null, module: 'CLIENTS', isAction: true },  // to add "client add"
  'BTN_Modifier2':            { path: null, module: 'CLIENTS', isAction: true },  // to add "client edit"

  // ═══════════════════════════════════════════
  // MESSAGERIE (Messaging)
  // ═══════════════════════════════════════════
  'Courrier':                 { path: null, module: 'Messagerie', isMenu: true },
  'Envoi_courrier':           { path: paths.app.messaging.sendMail.path, module: 'Messagerie' },
  'Reception1':               { path: paths.app.messaging.receiveMail.path, module: 'Messagerie' },
  'Message':                  { path: paths.app.messaging.internal.path, module: 'Messagerie' },
  'Demande_annulation':       { path: paths.app.messaging.cancelRequest.path, module: 'Messagerie' },
  'Demande_ajout_client':     { path: paths.app.messaging.addClient.path, module: 'Messagerie' },
   // to add : Creation_Consultation,Validation,Demande_d_ajout,Valider_la_demand 

  // ═════════════════════════════════════��═════
  // GED (Documents)
  // ═══════════════════════════════════════════
  'GED':                      { path: null, module: 'GED', isMenu: true },
  'Telecharger_document':     { path: paths.app.documentManagement.upload.path, module: 'GED' },
  'Scanner_document_papier':  { path: paths.app.documentManagement.scan.path, module: 'GED' },
  'Rechercher_documents':     { path: paths.app.documentManagement.search.path, module: 'GED' },
  'Supprimer_document':       { path: paths.app.documentManagement.delete.path, module: 'GED' },
  'Historique_mouvement':        { path: paths.app.documentManagement.updateRef.path, module: 'GED' },
  // 'maj_referencement':        { path: paths.app.documentManagement.history.path, module: 'GED' },
   // no existed taches : Historique mouvement

  // ═══════════════════════════════════════════
  // PARAMETRAGE (Settings)
  // ═══════════════════════════════════════════
  'OPT_Paramétrage':          { path: null, module: 'PARAMETRAGE', isMenu: true },
  'Global1':                  { path: paths.app.settings.global.path, module: 'PARAMETRAGE' },
  'Société':                  { path: paths.app.settings.company.path, module: 'PARAMETRAGE' },
  'Utilisateur':              { path: paths.app.settings.user.path, module: 'PARAMETRAGE' },
  'Connexion':                { path: paths.app.settings.connection.path, module: 'PARAMETRAGE' },
  'Initiation_Table':         { path: paths.app.settings.initTable.path, module: 'PARAMETRAGE' },
   // no existed taches : ged , graph, objectives , profession , projects

  // ═══════════════════════════════════════════
  // DROITS (Rights)
  // ═══════════════════════════════════════════
  'Droits':                   { path: null, module: 'DROITS', isMenu: true },
  'Agence':                   { path: paths.app.rights.chargeAllocation.path, module: 'DROITS' },
  'Mnu':                      { path: paths.app.rights.adminMenu.path, module: 'DROITS' },
  'Objectifs':                { path: paths.app.settings.objectives.path, module: 'DROITS' },
  'Menu_Fonctionnelle':       { path: paths.app.rights.functionalMenu.path, module: 'DROITS' },
  'Tâches':                   { path: paths.app.rights.taskList.path, module: 'DROITS' },
  'Client':                   { path: paths.app.rights.client.path, module: 'DROITS' },
};
// to add 	Droit_Consultation_Affectation_agence