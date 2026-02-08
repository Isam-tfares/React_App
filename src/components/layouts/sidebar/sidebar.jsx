import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useAuthorization } from '../../../lib/authorization';
import { paths } from '../../../config/paths';
import './sidebar.css';

// Navigation items with sub-menus
const navItems = [
  {
    name: 'Dashboard',
    path: paths.app.dashboard.path,
    icon: '📊',
    permission: 'dashboard:view',
  },
  {
    name: 'Appels d\'Offres',
    icon: '📋',
    permission: 'tenders:view',
    subItems: [
      { name: 'Nouveau', path: paths.app.tenders.new.path },
      { name: 'Consulter', path: paths.app.tenders.view.path },
      { name: 'Accord Participation', path: paths.app.tenders.participation.path },
      { name: 'Préparer', path: paths.app.tenders.prepare.path },
      { name: 'En attente résultat', path: paths.app.tenders.pending.path },
      { name: 'Attribué', path: paths.app.tenders.awarded.path },
      { name: 'Marché', path: paths.app.tenders.contract.path },
      { name: 'Situation caution', path: paths.app.tenders.guaranteeStatus.path },
      { name: 'M.à.j Caution', path: paths.app.tenders.updateGuarantee.path },
      { name: 'Caution à récupérer', path: paths.app.tenders.recoverGuarantee.path },
      { name: 'Résultat AO', path: paths.app.tenders.results.path },
      { name: 'Consultation Globale', path: paths.app.tenders.global.path },
      { name: 'Statistique AO', path: paths.app.tenders.statistics.path },
      { name: 'Qualification AO', path: paths.app.tenders.qualification.path },
    ],
  },
  {
    name: 'Marchés',
    icon: '📜',
    permission: 'contracts:view',
    subItems: [
      { name: 'Nouveau', path: paths.app.contracts.new.path },
      { name: 'Consulter Marché', path: paths.app.contracts.view.path },
      { name: 'Caution définitive', path: paths.app.contracts.finalGuarantee.path },
    ],
  },
  {
    name: 'Devis',
    icon: '💰',
    permission: 'quotes:view',
    subItems: [
      { name: 'Nouveau', path: paths.app.quotes.new.path },
      { name: 'Consulter', path: paths.app.quotes.view.path },
      { name: 'Situation BC', path: paths.app.quotes.orderStatus.path },
      { name: 'Référentiel des prix', path: paths.app.quotes.priceRef.path },
      { name: 'Détails devis', path: paths.app.quotes.details.path },
      { name: 'Paramétrage modèle', path: paths.app.quotes.template.path },
    ],
  },
  {
    name: 'Projets',
    icon: '🏗️',
    permission: 'projects:view',
    subItems: [
      { name: 'Nouveau', path: paths.app.projects.new.path },
      { name: 'Modifier', path: paths.app.projects.edit.path },
      { name: 'Consulter', path: paths.app.projects.view.path },
      { name: 'Supprimer', path: paths.app.projects.delete.path },
      { name: 'Sous projet', path: paths.app.projects.subProject.path },
      { name: 'Statistique', path: paths.app.projects.statistics.path },
      { name: 'Situation projets', path: paths.app.projects.status.path },
      { name: 'Géolocalisation', path: paths.app.projects.geolocation.path },
      { name: 'Changement des affectations', path: paths.app.projects.assignments.path },
    ],
  },
  {
    name: 'Réceptions',
    icon: '🔬',
    permission: 'receptions:view',
    subItems: [
      { name: 'Nouveau', path: paths.app.receptions.new.path },
      { name: 'Nouvelle Réception (Traction)', path: paths.app.receptions.newTraction.path },
      { name: 'Pré Réception', path: paths.app.receptions.preReception.path },
      { name: 'Nouvelle réception étude', path: paths.app.receptions.newStudy.path },
      { name: 'Essai autre matériaux', path: paths.app.receptions.otherMaterialTest.path },
      { name: 'Essai Béton', path: paths.app.receptions.concreteTest.path },
      { name: 'Gestion cylindre', path: paths.app.receptions.cylinderManagement.path },
      { name: 'Modifier réception', path: paths.app.receptions.edit.path },
      { name: 'Planning', path: paths.app.receptions.planning.path },
    ],
  },
  {
    name: 'Rapports',
    icon: '📄',
    permission: 'reports:view',
    subItems: [
      { name: 'À faire : Autres Matériaux', path: paths.app.reports.todoOtherMaterials.path },
      { name: 'À faire : Béton', path: paths.app.reports.todoConcrete.path },
      { name: 'À faire Global', path: paths.app.reports.todoGlobal.path },
      { name: 'Modifier', path: paths.app.reports.edit.path },
      { name: 'Consulter Rapport/Prix', path: paths.app.reports.viewPrice.path },
      { name: 'Rapport de synthèse', path: paths.app.reports.synthesis.path },
      { name: 'État livraison rapports', path: paths.app.reports.deliveryStatus.path },
      { name: 'Édition Rapport', path: paths.app.reports.edition.path },
      { name: 'Rapport d\'étude', path: paths.app.reports.study.path },
    ],
  },
  {
    name: 'Facturation',
    icon: '💳',
    permission: 'invoicing:view',
    subItems: [
      { name: 'Nouvelle facture', path: paths.app.invoicing.new.path },
      { name: 'Rapport à facturer', path: paths.app.invoicing.reportsToBill.path },
      { name: 'Création', path: paths.app.invoicing.create.path },
      { name: 'Consultation/Edition Factures', path: paths.app.invoicing.viewEdit.path },
      { name: 'Pré-facture (BL)', path: paths.app.invoicing.preInvoice.path },
      { name: 'Facture avoir', path: paths.app.invoicing.creditNote.path },
    ],
  },
  {
    name: 'Règlements Clients',
    icon: '💵',
    permission: 'clientPayments:view',
    subItems: [
      { name: 'Nouveau', path: paths.app.clientPayments.new.path },
      { name: 'Avance', path: paths.app.clientPayments.advance.path },
      { name: 'Consulter Règlements', path: paths.app.clientPayments.view.path },
      { name: 'En instance', path: paths.app.clientPayments.pending.path },
      { name: 'Suivi paiement factures', path: paths.app.clientPayments.invoiceTracking.path },
      { name: 'État Impayé', path: paths.app.clientPayments.unpaid.path },
    ],
  },
  {
    name: 'Achats',
    icon: '🛒',
    permission: 'purchases:view',
    subItems: [
      { name: 'Paramétrage', path: paths.app.purchases.settings.path },
      { name: 'Fournisseur', path: paths.app.purchases.supplier.path },
      { name: 'Dossier Achat', path: paths.app.purchases.file.path },
      { name: 'Dépense fournisseurs', path: paths.app.purchases.expense.path },
      { name: 'Règlements fournisseurs', path: paths.app.purchases.payments.path },
      { name: 'Budget et Objectif', path: paths.app.purchases.budget.path },
    ],
  },
  {
    name: 'Personnel',
    icon: '👥',
    permission: 'personnel:view',
    subItems: [
      { name: 'Dossier Salarié', path: paths.app.personnel.employee.path },
      { name: 'Dossier Administratif', path: paths.app.personnel.administrative.path },
      { name: 'Expérience', path: paths.app.personnel.experience.path },
      { name: 'Droit congé', path: paths.app.personnel.leaveRights.path },
      { name: 'Congé', path: paths.app.personnel.leave.path },
      { name: 'Paie', path: paths.app.personnel.payroll.path },
    ],
  },
  {
    name: 'Trésorerie',
    icon: '🏦',
    permission: 'treasury:view',
    subItems: [
      { name: 'Situation', path: paths.app.treasury.situation.path },
      { name: 'Banque', path: paths.app.treasury.bank.path },
      { name: 'Dépenses', path: paths.app.treasury.expenses.path },
      { name: 'Caisse siège', path: paths.app.treasury.hqCash.path },
      { name: 'Caisse agence', path: paths.app.treasury.branchCash.path },
      { name: 'Caisse employé', path: paths.app.treasury.employeeCash.path },
    ],
  },
  {
    name: 'Logistique',
    icon: '🚚',
    permission: 'logistics:view',
    subItems: [
      { name: 'Véhicules', path: paths.app.logistics.vehicles.path },
      { name: 'Foyers', path: paths.app.logistics.facilities.path },
      { name: 'Matériel', path: paths.app.logistics.equipment.path },
      { name: 'Autre Matériel', path: paths.app.logistics.otherEquipment.path },
      { name: 'Crédit & loyer', path: paths.app.logistics.creditRent.path },
    ],
  },
  {
    name: 'Clients',
    icon: '🏢',
    permission: 'clients:view',
    subItems: [
      { name: 'Mise à jours', path: paths.app.clients.update.path },
      { name: 'Situation Clients', path: paths.app.clients.situation.path },
      { name: 'Situation Client/Projet', path: paths.app.clients.projectSituation.path },
      { name: 'Liste rapports facturés', path: paths.app.clients.billedReports.path },
    ],
  },
  {
    name: 'Messagerie',
    icon: '✉️',
    permission: 'messaging:view',
    subItems: [
      { name: 'Envoi courrier', path: paths.app.messaging.sendMail.path },
      { name: 'Réception courrier', path: paths.app.messaging.receiveMail.path },
      { name: 'Message interne', path: paths.app.messaging.internal.path },
      { name: 'Remarque application', path: paths.app.messaging.appRemark.path },
    ],
  },
  {
    name: 'G.E.D',
    icon: '📁',
    permission: 'documents:view',
    subItems: [
      { name: 'Télécharger document', path: paths.app.documentManagement.upload.path },
      { name: 'Scanner document', path: paths.app.documentManagement.scan.path },
      { name: 'Rechercher documents', path: paths.app.documentManagement.search.path },
      { name: 'Supprimer document', path: paths.app.documentManagement.delete.path },
    ],
  },
  {
    name: 'Paramétrage',
    icon: '⚙️',
    permission: 'settings:view',
    subItems: [
      { name: 'Global', path: paths.app.settings.global.path },
      { name: 'Projets', path: paths.app.settings.projects.path },
      { name: 'Métier', path: paths.app.settings.profession.path },
      { name: 'Société', path: paths.app.settings.company.path },
      { name: 'Utilisateur', path: paths.app.settings.user.path },
    ],
  },
  {
    name: 'Droits',
    icon: '🔐',
    permission: 'rights:view',
    subItems: [
      { name: 'Menu Administrateur', path: paths.app.rights.adminMenu.path },
      { name: 'Menu Fonctionnelle', path: paths.app.rights.functionalMenu.path },
      { name: 'Liste des Tâches', path: paths.app.rights.taskList.path },
      { name: 'Régions et Villes', path: paths.app.rights.regions.path },
    ],
  },
];

export const Sidebar = ({ isOpen, onToggle, user, onLogout }) => {
  const { checkPermission } = useAuthorization();
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-logo">{isOpen ? 'LGC' : 'L'}</h2>
        <button className="sidebar-toggle" onClick={onToggle}>
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          if (!checkPermission(item.permission)) return null;

          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isExpanded = expandedMenus[item.name];

          return (
            <div key={item.name} className="nav-group">
              {hasSubItems ? (
                <>
                  <div
                    className="nav-item nav-parent"
                    onClick={() => toggleSubMenu(item.name)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {isOpen && (
                      <>
                        <span className="nav-text">{item.name}</span>
                        <span className="nav-arrow">{isExpanded ? '▼' : '▶'}</span>
                      </>
                    )}
                  </div>
                  {isOpen && isExpanded && (
                    <div className="sub-menu">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `nav-item sub-item ${isActive ? 'active' : ''}`
                          }
                        >
                          <span className="nav-text">{subItem.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-item ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="nav-icon">{item.icon}</span>
                  {isOpen && <span className="nav-text">{item.name}</span>}
                </NavLink>
              )}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        {isOpen && user && (
          <div className="user-info">
            <span className="user-name">
              {user.firstName} {user.full_name}
            </span>
            <span className="user-role">{user.role_name}</span>
          </div>
        )}
        <button className="logout-btn" onClick={onLogout}>
          {isOpen ? 'Déconnexion' : '🚪'}
        </button>
      </div>
    </aside>
  );
};