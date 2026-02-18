import { NavLink } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { useAuthorization } from '../../../lib/authorization';
import { TACHE_ROUTE_MAP } from '../../../config/taches-routes-map';
import './sidebar.css';

/**
 * Define the sidebar menu structure.
 * Each item has a `module` key that maps to the taches module name,
 * and subItems have a `tache` key matching the `nom_tache` from the DB.
 */
const menuStructure = [
  {
    name: 'Dashboard',
    icon: '📊',
    module: null, // Always visible for authenticated users
    path: '/app/dashboard',
  },
  {
    name: "Appels d'Offres",
    icon: '📋',
    module: 'AO',
    subItems: [
      { tache: 'AO_Créer', name: 'Nouveau' },
      { tache: 'Nouveau_AO', name: 'Consulter' },
      { tache: 'Avis_de_participation', name: 'Accord Participation' },
      { tache: 'Préparation_AO', name: 'Préparer' },
      { tache: 'En_attente_résultat', name: 'En attente résultat' },
      { tache: 'Attribué', name: 'Attribué' },
      { tache: 'Situation_caution', name: 'Situation caution' },
      { tache: 'Maj_Caution', name: 'M.à.j Caution' },
      { tache: 'Caution_à_recupere', name: 'Caution à récupérer' },
      { tache: 'Consultation_Globale', name: 'Consultation Globale' },
      { tache: 'Statistique_Ao', name: 'Statistique AO' },
      { tache: 'BTN_Nouveau_qualif', name: 'Qualification AO' },
    ],
  },
  {
    name: 'Marchés',
    icon: '📜',
    module: 'MARCHE',
    subItems: [
      { tache: 'Nouveau2', name: 'Nouveau' },
      { tache: 'Consulter', name: 'Consulter Marché' },
      { tache: 'Caution_définitive', name: 'Caution définitive' },
    ],
  },
  {
    name: 'Devis',
    icon: '💰',
    module: 'DEVIS',
    subItems: [
      { tache: 'Nouveau_devis1', name: 'Nouveau' },
      { tache: 'Bon_de_commande', name: 'Consulter' },
      { tache: 'Situation_BC', name: 'Situation BC' },
      { tache: 'Referenciel_Prix', name: 'Référentiel des prix' },
    ],
  },
  {
    name: 'Projets',
    icon: '🏗️',
    module: 'PROJETS',
    subItems: [
      { tache: 'Nouveau3', name: 'Nouveau' },
      { tache: 'Modifier1', name: 'Modifier' },
      { tache: 'Suivi_projet', name: 'Consulter' },
      { tache: 'Supprimer1', name: 'Supprimer' },
      { tache: 'Sous_projet', name: 'Sous projet' },
      { tache: 'Statistique', name: 'Statistique' },
      { tache: 'Situation_projets', name: 'Situation projets' },
    ],
  },
  {
    name: 'Réceptions',
    icon: '🔬',
    module: 'RECEPTION',
    subItems: [
      { tache: 'Nouveau5', name: 'Nouveau' },
      { tache: 'Essai_autre_materiaux', name: 'Essai autre matériaux' },
      { tache: 'Essai_Beton', name: 'Essai Béton' },
      { tache: 'Gestion_cylindre', name: 'Gestion cylindre' },
      { tache: 'Modifier_test', name: 'Modifier réception' },
      { tache: 'Suivi_Reception', name: 'Suivi autre matériaux' },
      { tache: 'Essai_beton_LABO', name: 'Essai béton (LABO)' },
      { tache: 'Connsultation_essai_Interne_Exetrne', name: 'Consultation essai' },
      { tache: 'Traitement_des_essais_Labo', name: 'Traitement essais Labo' },
      { tache: 'Initialisation', name: 'Initialisation' },
      { tache: 'Liste_reception_pour_Analyse', name: 'Planning' },
    ],
  },
  {
    name: 'Rapports',
    icon: '📄',
    module: 'RAPPORTS',
    subItems: [
      { tache: 'Autre_Matériaux', name: 'À faire : Autres Matériaux' },
      { tache: 'Béton2', name: 'À faire : Béton' },
      { tache: 'Modifier2', name: 'Modifier' },
      { tache: 'Consulter3', name: 'Consulter Rapport/Prix' },
      { tache: 'Etat_livraison_rapports', name: 'État livraison rapports' },
      { tache: 'Edition_Rapport', name: 'Édition Rapport' },
      { tache: 'Rapport_d_étude', name: "Rapport d'étude" },
    ],
  },
  {
    name: 'Facturation',
    icon: '💳',
    module: 'FACTURATION',
    subItems: [
      { tache: 'Rapport_à_facturer', name: 'Rapport à facturer' },
      { tache: 'Rapport_à_facturer_Global', name: 'Rapport par projet' },
      { tache: 'Creation_facture1', name: 'Création facture' },
      { tache: 'Consultation_Edition', name: 'Consultation/Edition' },
      { tache: 'Attachement', name: 'Attachement' },
      { tache: 'Etat_livraison_Factures', name: 'État livraison Factures' },
      { tache: 'Autres_factures', name: 'Autres factures' },
      { tache: 'Factures_annulées', name: 'Factures annulées' },
      { tache: 'Pré_facture_BL', name: 'Pré-facture (BL)' },
      { tache: 'Facture_avoir', name: 'Facture avoir' },
    ],
  },
  {
    name: 'Règlements Clients',
    icon: '💵',
    module: 'REGLEMENT CLIENT',
    subItems: [
      { tache: 'Nv_reg_clt', name: 'Nouveau' },
      { tache: 'Avance', name: 'Avance' },
      { tache: 'Consulter_rg_clt', name: 'Consulter' },
      { tache: 'En_instance', name: 'En instance' },
      { tache: 'Suivi_reglement', name: 'Suivi paiement factures' },
      { tache: 'Relevé_Client', name: 'Relevé Client' },
      { tache: 'Situation_Globale', name: 'Situation Globale/projet' },
      { tache: 'Règlement_annulés', name: 'Règlements annulés' },
    ],
  },
  {
    name: 'Bordereaux',
    icon: '📦',
    module: 'BORDEREAUX',
    subItems: [
      { tache: 'Bordereau_à_faire', name: 'Bordereau à faire' },
      { tache: 'Creation', name: 'Modification/Edition' },
      { tache: 'Consultation', name: 'Livraison' },
    ],
  },
  {
    name: 'Achats',
    icon: '🛒',
    module: 'ACHATS',
    subItems: [
      { tache: 'OPT_Fournisseur', name: 'Fournisseur' },
      { tache: 'Demande_et_Validation', name: 'Demande et Validation' },
      { tache: 'Dossier_Achat', name: 'Dossier Achat' },
      { tache: 'Facture_FOURNISSEUR', name: 'Dépense fournisseurs' },
      { tache: 'Reglement', name: 'Règlement Fournisseur' },
      { tache: 'Budget', name: 'Budget et Objectif' },
    ],
  },
  {
    name: 'Personnel',
    icon: '👥',
    module: 'PERSONNEL',
    subItems: [
      { tache: 'OPT_Dossier_Salarié', name: 'Dossier Salarié' },
      { tache: 'Dossier_Administratif', name: 'Dossier Administratif' },
      { tache: 'Droit_congé', name: 'Droit congé' },
      { tache: 'OPT_Congé', name: 'Congé' },
      { tache: 'Préparation_paie', name: 'Paie' },
    ],
  },
  {
    name: 'Trésorerie',
    icon: '🏦',
    module: 'TRESORERIE',
    subItems: [
      { tache: 'Situation1', name: 'Situation' },
      { tache: 'Banque1', name: 'Banque' },
      { tache: 'Dépenses', name: 'Dépenses' },
      { tache: 'Caisse_siège', name: 'Caisse siège' },
      { tache: 'Caisse_agence', name: 'Caisse agence' },
      { tache: 'Caisse_employé', name: 'Caisse employé' },
    ],
  },
  {
    name: 'Logistique',
    icon: '🚚',
    module: 'Logistique',
    subItems: [
      { tache: 'Véhicules', name: 'Véhicules' },
      { tache: 'Loyer', name: 'Loyer' },
      { tache: 'Matériel', name: 'Matériel' },
      { tache: 'Autres1', name: 'Autres matériels' },
      { tache: 'Autres_Mouvements', name: 'Crédit & loyer' },
    ],
  },
  {
    name: 'Clients',
    icon: '🏢',
    module: 'CLIENTS',
    subItems: [
      { tache: 'Mise_à_jours', name: 'Mise à jours' },
      { tache: 'Situation_Clients', name: 'Situation Clients' },
      { tache: 'Situation_Client_Globale', name: 'Liste rapports facturés' },
      { tache: 'Situation_client_Facture', name: 'Situation client/Facture' },
    ],
  },
  {
    name: 'Messagerie',
    icon: '✉️',
    module: 'Messagerie',
    subItems: [
      { tache: 'Envoi_courrier', name: 'Envoi courrier' },
      { tache: 'Reception1', name: 'Réception courrier' },
      { tache: 'Message', name: 'Message interne' },
      { tache: 'Demande_annulation', name: 'Demande annulation' },
      { tache: 'Demande_ajout_client', name: 'Demande ajout client' },
    ],
  },
  {
    name: 'G.E.D',
    icon: '📁',
    module: 'GED',
    subItems: [
      { tache: 'Telecharger_document', name: 'Télécharger document' },
      { tache: 'Scanner_document_papier', name: 'Scanner document' },
      { tache: 'Rechercher_documents', name: 'Rechercher documents' },
      { tache: 'Supprimer_document', name: 'Supprimer document' },
    ],
  },
  {
    name: 'Paramétrage',
    icon: '⚙️',
    module: 'PARAMETRAGE',
    subItems: [
      { tache: 'Global1', name: 'Global' },
      { tache: 'Société', name: 'Société' },
      { tache: 'Utilisateur', name: 'Utilisateur' },
      { tache: 'Connexion', name: 'Connexion' },
      { tache: 'Initiation_Table', name: 'Initiation Table' },
    ],
  },
  {
    name: 'Droits',
    icon: '🔐',
    module: 'DROITS',
    subItems: [
      { tache: 'Mnu', name: 'Menu Administrateur' },
      { tache: 'Menu_Fonctionnelle', name: 'Menu Fonctionnelle' },
      { tache: 'Tâches', name: 'Liste des Tâches' },
      { tache: 'Client', name: 'Client' },
      { tache: 'Agence', name: 'Agence' },
    ],
  },
];

export const Sidebar = ({ isOpen, onToggle, user, onLogout }) => {
  const { hasTache, hasModuleAccess } = useAuthorization();
  const [expandedMenus, setExpandedMenus] = useState({});

  // Filter menu items based on user's taches
  const visibleMenu = useMemo(() => {
    return menuStructure
      .map((item) => {
        // Dashboard is always visible
        if (item.module === null) return item;

        // Check if user has ANY tache in this module
        if (!hasModuleAccess(item.module)) return null;

        // Filter subItems to only show pages the user has access to
        if (item.subItems) {
          const visibleSubItems = item.subItems.filter((sub) => {
            const mapping = TACHE_ROUTE_MAP[sub.tache];
            // Only show if user has the tache AND it has a navigable path
            return hasTache(sub.tache) && mapping?.path;
          });

          if (visibleSubItems.length === 0) return null;

          return { ...item, subItems: visibleSubItems };
        }

        return item;
      })
      .filter(Boolean);
  }, [user, hasTache, hasModuleAccess]);

  const toggleSubMenu = (menuName) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
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
        {visibleMenu.map((item) => {
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
                      {item.subItems.map((subItem) => {
                        const mapping = TACHE_ROUTE_MAP[subItem.tache];
                        return (
                          <NavLink
                            key={mapping.path}
                            to={mapping.path}
                            className={({ isActive }) =>
                              `nav-item sub-item ${isActive ? 'active' : ''}`
                            }
                          >
                            <span className="nav-text">{subItem.name}</span>
                          </NavLink>
                        );
                      })}
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
            <span className="user-name">{user.full_name}</span>
            <span className="user-role">{user.lib_fonction_person}</span>
          </div>
        )}
        <button className="logout-btn" onClick={onLogout}>
          {isOpen ? 'Déconnexion' : '🚪'}
        </button>
      </div>
    </aside>
  );
};