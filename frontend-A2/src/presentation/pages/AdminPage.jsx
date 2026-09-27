import { useState } from 'react';
import '@/presentation/components/admin/admin.css';
import AdminSidebar from '@/presentation/components/admin/AdminSidebar';
import AdminTopbar from '@/presentation/components/admin/AdminTopbar';
import AdminKpis from '@/presentation/components/admin/AdminKpis';
import GradesSheet from '@/presentation/components/admin/GradesSheet';

export default function AdminPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="adm-shell">
      <AdminSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="adm-col">
        <AdminTopbar onToggleMenu={() => setMenuOpen((v) => !v)} />

        <main className="adm-main">
          <div className="adm-intro">
            <h1 className="adm-title">
              Bienvenido, Ronald García — Periodo Lectivo 3 (2026)
            </h1>
            <p className="adm-sub">
              Panel de control académico unificado y planilla SIEE.
            </p>
          </div>

          <AdminKpis />
          <GradesSheet />
        </main>

        <footer className="adm-foot">
          <span>
            Aislamiento Multi-tenant: Esquema PostgreSQL Activo
            (tenant_incodelca)
          </span>
          <span>EduCore SaaS v1.0 · A2-Admin</span>
        </footer>
      </div>
    </div>
  );
}
