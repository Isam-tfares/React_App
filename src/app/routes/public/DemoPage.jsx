import { useState } from "react";

const MENU = [
  { name: "Tableau de Bord", icon: "📊", path: "/app/dashboard" },
  {
    name: "Appels d'Offres", icon: "📋",
    subItems: [
      { name: "Nouveau AO", path: "/app/tenders/new" },
      { name: "Consulter AO", path: "/app/tenders/view" },
      { name: "Accord Participation", path: "/app/tenders/participation" },
      { name: "Préparer", path: "/app/tenders/prepare" },
      { name: "En attente résultat", path: "/app/tenders/pending" },
      { name: "Attribué", path: "/app/tenders/awarded" },
      { name: "Marché AO", path: "/app/tenders/contract" },
      { name: "Situation caution", path: "/app/tenders/guarantee-status" },
      { name: "M.à.j Caution", path: "/app/tenders/update-guarantee" },
      { name: "Caution à récupérer", path: "/app/tenders/recover-guarantee" },
      { name: "Résultat AO", path: "/app/tenders/results" },
      { name: "Consultation Globale", path: "/app/tenders/global" },
      { name: "Statistique AO", path: "/app/tenders/statistics" },
      { name: "Qualification AO", path: "/app/tenders/qualification" },
    ],
  },
  {
    name: "Marchés", icon: "📜",
    subItems: [
      { name: "Nouveau Marché", path: "/app/contracts/new" },
      { name: "Consulter Marché", path: "/app/contracts/view" },
      { name: "Caution définitive", path: "/app/contracts/final-guarantee" },
    ],
  },
  {
    name: "Devis", icon: "💰",
    subItems: [
      { name: "Nouveau Devis", path: "/app/quotes/new" },
      { name: "Consulter Devis", path: "/app/quotes/view" },
      { name: "Situation BC", path: "/app/quotes/order-status" },
      { name: "Référentiel des prix", path: "/app/quotes/price-reference" },
      { name: "Détails devis", path: "/app/quotes/details" },
      { name: "Paramétrage modèle", path: "/app/quotes/template" },
    ],
  },
  {
    name: "Projets", icon: "🏗️",
    subItems: [
      { name: "Nouveau Projet", path: "/app/projects/new" },
      { name: "Modifier Projet", path: "/app/projects/edit" },
      { name: "Consulter Projets", path: "/app/projects/view" },
      { name: "Supprimer Projet", path: "/app/projects/delete" },
      { name: "Sous projet", path: "/app/projects/sub-project" },
      { name: "Statistique Projets", path: "/app/projects/statistics" },
      { name: "Situation projets", path: "/app/projects/status" },
      { name: "Géolocalisation", path: "/app/projects/geolocation" },
      { name: "Changement affectations", path: "/app/projects/assignments" },
    ],
  },
  {
    name: "Réceptions", icon: "🔬",
    subItems: [
      { name: "Nouvelle Réception", path: "/app/receptions/new" },
      { name: "Nouvelle Réception (Traction)", path: "/app/receptions/new-traction" },
      { name: "Pré Réception", path: "/app/receptions/pre-reception" },
      { name: "Réception étude", path: "/app/receptions/new-study" },
      { name: "Supprimer réception", path: "/app/receptions/delete" },
      { name: "Essai autre matériaux", path: "/app/receptions/other-material-test" },
      { name: "Essai Béton", path: "/app/receptions/concrete-test" },
      { name: "Gestion cylindre", path: "/app/receptions/cylinder-management" },
      { name: "Modifier réception", path: "/app/receptions/edit" },
      { name: "Suivi autres matériaux", path: "/app/receptions/other-materials-tracking" },
      { name: "Essai béton (LABO)", path: "/app/receptions/concrete-test-lab" },
      { name: "Consultation essai", path: "/app/receptions/test-consultation" },
      { name: "Traitement essais Labo", path: "/app/receptions/lab-treatment" },
      { name: "Initialisation", path: "/app/receptions/initialization" },
      { name: "Planning", path: "/app/receptions/planning" },
    ],
  },
  {
    name: "Rapports", icon: "📄",
    subItems: [
      { name: "À faire : Autres Matériaux", path: "/app/reports/todo-other-materials" },
      { name: "À faire : Béton", path: "/app/reports/todo-concrete" },
      { name: "À faire Global", path: "/app/reports/todo-global" },
      { name: "Modifier Rapport", path: "/app/reports/edit" },
      { name: "Consulter Rapport/Prix", path: "/app/reports/view-price" },
      { name: "Rapport de synthèse", path: "/app/reports/synthesis" },
      { name: "État livraison rapports", path: "/app/reports/delivery-status" },
      { name: "Édition Rapport", path: "/app/reports/edition" },
      { name: "Rapport d'étude", path: "/app/reports/study" },
    ],
  },
  {
    name: "Facturation", icon: "💳",
    subItems: [
      { name: "Nouvelle facture", path: "/app/invoicing/new" },
      { name: "Rapport à facturer", path: "/app/invoicing/reports-to-bill" },
      { name: "Rapport par projet", path: "/app/invoicing/reports-by-project" },
      { name: "Création Facture", path: "/app/invoicing/create" },
      { name: "Consultation/Edition", path: "/app/invoicing/view-edit" },
      { name: "Attachement", path: "/app/invoicing/attachment" },
      { name: "État livraison Factures", path: "/app/invoicing/delivery" },
      { name: "Autres factures", path: "/app/invoicing/other" },
      { name: "Factures/BL annulées", path: "/app/invoicing/cancelled" },
      { name: "Pré-facture (BL)", path: "/app/invoicing/pre-invoice" },
      { name: "Facture avoir", path: "/app/invoicing/credit-note" },
    ],
  },
  {
    name: "Règlements Clients", icon: "💵",
    subItems: [
      { name: "Nouveau Règlement", path: "/app/client-payments/new" },
      { name: "Avance", path: "/app/client-payments/advance" },
      { name: "Consulter Règlements", path: "/app/client-payments/view" },
      { name: "En instance", path: "/app/client-payments/pending" },
      { name: "Suivi paiement factures", path: "/app/client-payments/invoice-tracking" },
      { name: "Relevé Client", path: "/app/client-payments/client-statement" },
      { name: "Relevé par projet", path: "/app/client-payments/project-statement" },
      { name: "Situation globale/projet", path: "/app/client-payments/global-situation" },
      { name: "Situation globale financière", path: "/app/client-payments/financial-situation" },
      { name: "Règlements annulés", path: "/app/client-payments/cancelled" },
      { name: "État Impayé", path: "/app/client-payments/unpaid" },
    ],
  },
  {
    name: "Bordereaux", icon: "📦",
    subItems: [
      { name: "Bordereau à faire/Rapports", path: "/app/delivery-notes/todo-reports" },
      { name: "Modification/Edition", path: "/app/delivery-notes/edit-view" },
      { name: "Livraison", path: "/app/delivery-notes/delivery" },
    ],
  },
  {
    name: "Achats", icon: "🛒",
    subItems: [
      { name: "Paramétrage", path: "/app/purchases/settings" },
      { name: "Fournisseur", path: "/app/purchases/supplier" },
      { name: "Validation Dossier Achat", path: "/app/purchases/validate-file" },
      { name: "Dossier Achat", path: "/app/purchases/file" },
      { name: "Dépense fournisseurs", path: "/app/purchases/expense" },
      { name: "Règlements fournisseurs", path: "/app/purchases/payments" },
      { name: "Budget et Objectif", path: "/app/purchases/budget" },
    ],
  },
  {
    name: "Personnel", icon: "👥",
    subItems: [
      { name: "Dossier Salarié", path: "/app/personnel/employee" },
      { name: "Dossier Administratif", path: "/app/personnel/administrative" },
      { name: "Expérience", path: "/app/personnel/experience" },
      { name: "Droit congé", path: "/app/personnel/leave-rights" },
      { name: "Congé", path: "/app/personnel/leave" },
      { name: "Paie", path: "/app/personnel/payroll" },
    ],
  },
  {
    name: "Trésorerie", icon: "🏦",
    subItems: [
      { name: "Situation", path: "/app/treasury/situation" },
      { name: "Banque", path: "/app/treasury/bank" },
      { name: "Dépenses", path: "/app/treasury/expenses" },
      { name: "Caisse siège", path: "/app/treasury/hq-cash" },
      { name: "Caisse agence", path: "/app/treasury/branch-cash" },
      { name: "Caisse employé", path: "/app/treasury/employee-cash" },
    ],
  },
  {
    name: "Logistique", icon: "🚚",
    subItems: [
      { name: "Véhicules", path: "/app/logistics/vehicles" },
      { name: "Foyers", path: "/app/logistics/facilities" },
      { name: "Matériel", path: "/app/logistics/equipment" },
      { name: "Autre Matériel", path: "/app/logistics/other-equipment" },
      { name: "Crédit & loyer", path: "/app/logistics/credit-rent" },
    ],
  },
  {
    name: "Clients", icon: "🏢",
    subItems: [
      { name: "Mise à jours", path: "/app/clients/update" },
      { name: "Situation Clients", path: "/app/clients/situation" },
      { name: "Situation Client/Projet", path: "/app/clients/project-situation" },
      { name: "Liste rapports facturés", path: "/app/clients/billed-reports" },
      { name: "Situation Client/Facture", path: "/app/clients/invoice-situation" },
    ],
  },
  {
    name: "Messagerie", icon: "✉️",
    subItems: [
      { name: "Envoi courrier", path: "/app/messaging/send-mail" },
      { name: "Réception courrier", path: "/app/messaging/receive-mail" },
      { name: "Message interne", path: "/app/messaging/internal" },
      { name: "Remarque application", path: "/app/messaging/app-remark" },
      { name: "Demande annulation", path: "/app/messaging/cancel-request" },
      { name: "Demande ajout client", path: "/app/messaging/add-client" },
    ],
  },
  {
    name: "G.E.D", icon: "📁",
    subItems: [
      { name: "Télécharger document", path: "/app/documents/upload" },
      { name: "Scanner document", path: "/app/documents/scan" },
      { name: "Rechercher documents", path: "/app/documents/search" },
      { name: "Mise à jour référencement", path: "/app/documents/update-ref" },
      { name: "Supprimer document", path: "/app/documents/delete" },
      { name: "Historique mouvement", path: "/app/documents/history" },
    ],
  },
  {
    name: "Paramétrage", icon: "⚙️",
    subItems: [
      { name: "Paramétrage Global", path: "/app/settings/global" },
      { name: "Paramétrage Projets", path: "/app/settings/projects" },
      { name: "Paramétrage Métier", path: "/app/settings/profession" },
      { name: "Paramétrage Graphe", path: "/app/settings/graph" },
      { name: "Paramétrage Société", path: "/app/settings/company" },
      { name: "Paramétrage Utilisateur", path: "/app/settings/user" },
      { name: "Paramétrage Connexion", path: "/app/settings/connection" },
      { name: "Initiation Table", path: "/app/settings/init-table" },
      { name: "Paramétrage Objectifs", path: "/app/settings/objectives" },
      { name: "Paramétrage G.E.D", path: "/app/settings/ged" },
    ],
  },
  {
    name: "Droits", icon: "🔐",
    subItems: [
      { name: "Menu Administrateur", path: "/app/rights/admin-menu" },
      { name: "Menu Fonctionnelle", path: "/app/rights/functional-menu" },
      { name: "Affectation charges", path: "/app/rights/charge-allocation" },
      { name: "Liste des Tâches", path: "/app/rights/task-list" },
      { name: "Droits Client", path: "/app/rights/client" },
      { name: "Régions et Villes", path: "/app/rights/regions" },
    ],
  },
];

const allRoutes = MENU.flatMap((m) =>
  m.subItems ? m.subItems : [{ name: m.name, path: m.path }]
);

export default function DemoPage() {
  const [activePath, setActivePath] = useState("/app/dashboard");
  const [expanded, setExpanded] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");

  const toggle = (name) => setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

  const activeModule = MENU.find((m) =>
    m.subItems ? m.subItems.some((s) => s.path === activePath) : m.path === activePath
  );
  const activeItem = allRoutes.find((r) => r.path === activePath) || allRoutes[0];

  const filteredMenu = search
    ? MENU.map((m) => ({
        ...m,
        subItems: m.subItems?.filter((s) => s.name.toLowerCase().includes(search.toLowerCase())),
      })).filter(
        (m) => m.name.toLowerCase().includes(search.toLowerCase()) || (m.subItems && m.subItems.length > 0)
      )
    : MENU;

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#f0f4ff", overflow: "hidden" }}>

      {/* ── SIDEBAR ── */}
      <aside style={{
        width: sidebarOpen ? 268 : 62,
        minWidth: sidebarOpen ? 268 : 62,
        background: "linear-gradient(180deg, #193e84 0%, #1e4fa0 100%)",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s cubic-bezier(.4,0,.2,1), min-width 0.3s",
        overflow: "hidden",
        boxShadow: "4px 0 20px rgba(25,62,132,0.2)",
        zIndex: 10,
        flexShrink: 0,
      }}>
        {/* Header */}
        <div style={{ padding: "16px 12px", borderBottom: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: 10, minHeight: 62 }}>
          {sidebarOpen && (
            <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, overflow: "hidden" }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, color: "#193e84", flexShrink: 0 }}>L</div>
              <div style={{ overflow: "hidden" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", whiteSpace: "nowrap" }}>LGC SYSTEM</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Mode Démo</div>
              </div>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 6, width: 28, height: 28, cursor: "pointer", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {sidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        {/* Search */}
        {sidebarOpen && (
          <div style={{ padding: "10px 10px 4px" }}>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", fontSize: 11, color: "rgba(255,255,255,0.45)" }}>🔍</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher..."
                style={{ width: "100%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, padding: "6px 8px 6px 26px", fontSize: 12, color: "#fff", outline: "none", boxSizing: "border-box" }}
              />
            </div>
          </div>
        )}

        {/* Counter */}
        {sidebarOpen && (
          <div style={{ padding: "4px 10px 8px" }}>
            <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 6, padding: "4px 10px", fontSize: 11, color: "rgba(255,255,255,0.8)", textAlign: "center" }}>
              {allRoutes.length} routes · {MENU.length} modules
            </div>
          </div>
        )}

        {/* Nav */}
        <nav style={{ flex: 1, overflowY: "auto", overflowX: "hidden", padding: "4px 0 8px" }}>
          {filteredMenu.map((item) => {
            const isActive = item.path === activePath || item.subItems?.some((s) => s.path === activePath);
            const isExpanded = expanded[item.name] ?? false;
            return (
              <div key={item.name}>
                <div
                  onClick={() => { item.path ? setActivePath(item.path) : toggle(item.name); }}
                  style={{ display: "flex", alignItems: "center", padding: sidebarOpen ? "9px 10px" : "11px 0", justifyContent: sidebarOpen ? "flex-start" : "center", cursor: "pointer", borderLeft: `3px solid ${isActive ? "#64b5f6" : "transparent"}`, background: isActive ? "rgba(255,255,255,0.15)" : "transparent", gap: 10, margin: "1px 0", transition: "all 0.15s" }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
                >
                  <span style={{ fontSize: 16, lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                  {sidebarOpen && (
                    <>
                      <span style={{ flex: 1, fontSize: 13, fontWeight: isActive ? 600 : 400, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: isActive ? 1 : 0.85 }}>{item.name}</span>
                      {item.subItems && (
                        <>
                          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.15)", padding: "1px 6px", borderRadius: 99, flexShrink: 0 }}>{item.subItems.length}</span>
                          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", flexShrink: 0, marginLeft: 2 }}>{isExpanded ? "▼" : "▶"}</span>
                        </>
                      )}
                    </>
                  )}
                </div>
                {sidebarOpen && item.subItems && isExpanded && (
                  <div style={{ background: "rgba(0,0,0,0.12)", borderLeft: "2px solid rgba(255,255,255,0.15)", marginLeft: 14 }}>
                    {item.subItems.map((sub) => {
                      const subActive = sub.path === activePath;
                      return (
                        <div
                          key={sub.path}
                          onClick={() => setActivePath(sub.path)}
                          style={{ padding: "7px 10px 7px 18px", cursor: "pointer", fontSize: 12, color: subActive ? "#fff" : "rgba(255,255,255,0.65)", fontWeight: subActive ? 600 : 400, background: subActive ? "rgba(255,255,255,0.18)" : "transparent", borderLeft: `2px solid ${subActive ? "#64b5f6" : "transparent"}`, transition: "all 0.12s", display: "flex", alignItems: "center", gap: 7 }}
                          onMouseEnter={(e) => { if (!subActive) { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#fff"; } }}
                          onMouseLeave={(e) => { if (!subActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; } }}
                        >
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: subActive ? "#64b5f6" : "rgba(255,255,255,0.3)", flexShrink: 0 }} />
                          {sub.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        {sidebarOpen && (
          <div style={{ padding: "10px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 8, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#193e84", flexShrink: 0 }}>A</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Admin Demo</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>Tous les droits</div>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* ── MAIN ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar */}
        <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, boxShadow: "0 1px 4px rgba(25,62,132,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#193e84" }} />
            <span style={{ fontSize: 13, color: "#94a3b8" }}>{activeModule?.name || "Dashboard"}</span>
            <span style={{ color: "#cbd5e1" }}>/</span>
            <span style={{ fontSize: 13, color: "#1e293b", fontWeight: 600 }}>{activeItem?.name}</span>
          </div>
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", color: "#1d4ed8", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 99 }}>
            🔵 DEMO — Toutes les routes accessibles
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, overflowY: "auto", padding: "24px 28px", background: "#f0f4ff" }}>
          {activePath === "/app/dashboard" ? (
            <DashboardContent allRoutes={allRoutes} MENU={MENU} setActivePath={setActivePath} setExpanded={setExpanded} />
          ) : (
            <RouteContent activeItem={activeItem} activeModule={activeModule} activePath={activePath} />
          )}
        </main>
      </div>
    </div>
  );
}

function DashboardContent({ allRoutes, MENU, setActivePath, setExpanded }) {
  return (
    <div>
      {/* Welcome banner */}
      <div style={{ background: "linear-gradient(135deg, #193e84 0%, #2563eb 100%)", borderRadius: 14, padding: "28px 32px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 20px rgba(25,62,132,0.25)" }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Bienvenue, Admin 👋</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>Mode démonstration — toutes les routes sont visibles</div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {[{ label: "Routes", value: allRoutes.length }, { label: "Modules", value: MENU.length }].map((s) => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "14px 22px", textAlign: "center", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 }}>
        {[
          { label: "Projets Actifs", value: "24", icon: "🏗️", left: "#193e84" },
          { label: "Tests Effectués", value: "1 234", icon: "🔬", left: "#1d4ed8" },
          { label: "Factures en cours", value: "47", icon: "💳", left: "#2563eb" },
          { label: "Tests Validés", value: "856", icon: "✅", left: "#3b82f6" },
        ].map((s) => (
          <div key={s.label} style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: `4px solid ${s.left}`, borderRadius: 12, padding: "18px 16px", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 1px 4px rgba(25,62,132,0.06)" }}>
            <div style={{ fontSize: 32 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 11, color: "#64748b", marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#1e293b" }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* All modules grid */}
      <div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 4, height: 16, borderRadius: 2, background: "#193e84", display: "inline-block" }} />
          Tous les modules &amp; routes
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {MENU.filter((m) => m.subItems).map((module) => (
            <div key={module.name} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(25,62,132,0.05)" }}>
              <div style={{ background: "#193e84", padding: "11px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>{module.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", flex: 1 }}>{module.name}</span>
                <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 99 }}>{module.subItems.length}</span>
              </div>
              <div>
                {module.subItems.map((sub) => (
                  <div
                    key={sub.path}
                    onClick={() => { setActivePath(sub.path); setExpanded((p) => ({ ...p, [module.name]: true })); }}
                    style={{ padding: "7px 14px", fontSize: 12, color: "#475569", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #f1f5f9", transition: "all 0.12s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#eff6ff"; e.currentTarget.style.color = "#193e84"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#475569"; }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#bfdbfe", flexShrink: 0 }} />
                    <span style={{ flex: 1 }}>{sub.name}</span>
                    <span style={{ fontSize: 10, color: "#cbd5e1", fontFamily: "monospace" }}>{sub.path.split("/").slice(-1)[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RouteContent({ activeItem, activeModule, activePath }) {
  return (
    <div style={{ maxWidth: 900 }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 18, display: "flex", alignItems: "center", gap: 6 }}>
        <span>Dashboard</span><span>›</span>
        <span style={{ color: "#193e84" }}>{activeModule?.name}</span><span>›</span>
        <span style={{ color: "#1e293b", fontWeight: 600 }}>{activeItem?.name}</span>
      </div>

      {/* Title card */}
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: "4px solid #193e84", borderRadius: 14, padding: "24px 28px", marginBottom: 20, boxShadow: "0 1px 6px rgba(25,62,132,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "#eff6ff", border: "1px solid #bfdbfe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
            {activeModule?.icon || "📄"}
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#1e293b", marginBottom: 3 }}>{activeItem?.name}</div>
            <div style={{ fontSize: 12, color: "#193e84", fontWeight: 600 }}>{activeModule?.name}</div>
          </div>
          <div style={{ marginLeft: "auto", background: "#fef9c3", border: "1px solid #fde047", color: "#854d0e", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 99 }}>
            🚧 En développement
          </div>
        </div>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: "#64748b", background: "#f8fafc", border: "1px solid #e2e8f0", padding: "7px 12px", borderRadius: 7, display: "inline-block" }}>
          {activePath}
        </div>
      </div>

      {/* Filters + actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
        {["Filtres", "Actions rapides"].map((title) => (
          <div key={title} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px", boxShadow: "0 1px 4px rgba(25,62,132,0.05)" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1e293b", marginBottom: 12, display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 3, height: 13, borderRadius: 2, background: "#193e84", display: "inline-block" }} />
              {title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ height: 32, borderRadius: 7, background: "#f1f5f9", width: `${70 + i * 8}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(25,62,132,0.05)" }}>
        <div style={{ padding: "14px 18px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>Données — {activeItem?.name}</span>
          <div style={{ background: "#193e84", color: "#fff", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 8, cursor: "pointer" }}>+ Nouveau</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 80px", padding: "9px 18px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
          {["Référence", "Date", "Statut", "Montant", "Actions"].map((h) => (
            <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</div>
          ))}
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 80px", padding: "12px 18px", borderBottom: "1px solid #f1f5f9", alignItems: "center" }}>
            <div style={{ height: 13, borderRadius: 4, background: "#e2e8f0", width: `${55 + i * 7}%` }} />
            <div style={{ height: 13, borderRadius: 4, background: "#f1f5f9", width: "65%" }} />
            <div style={{ height: 20, borderRadius: 99, background: i % 2 === 0 ? "#dcfce7" : "#fef9c3", width: "60%", border: i % 2 === 0 ? "1px solid #86efac" : "1px solid #fde047" }} />
            <div style={{ height: 13, borderRadius: 4, background: "#f1f5f9", width: "50%" }} />
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "#eff6ff", border: "1px solid #bfdbfe" }} />
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "#fef2f2", border: "1px solid #fecaca" }} />
            </div>
          </div>
        ))}
        <div style={{ padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc" }}>
          <span style={{ fontSize: 11, color: "#94a3b8" }}>Affichage 1–5 sur — éléments</span>
          <div style={{ display: "flex", gap: 6 }}>
            {["‹", "1", "2", "3", "›"].map((p) => (
              <div key={p} style={{ padding: "4px 10px", borderRadius: 6, background: p === "1" ? "#193e84" : "#fff", color: p === "1" ? "#fff" : "#64748b", fontSize: 12, cursor: "pointer", border: "1px solid #e2e8f0" }}>{p}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
