import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '@/routes/routePaths';

const NAV_ITEMS = [
  { id: 'problema', label: '01 Problema' },
  { id: 'como-funciona', label: '02 Cómo funciona' },
  { id: 'costos', label: '03 Costos' },
  { id: 'seguridad', label: '04 Seguridad' },
  { id: 'piloto', label: '05 Piloto' },
];

export default function LandingHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  function scrollTo(id) {
    setDrawerOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function goLogin() {
    setDrawerOpen(false);
    navigate(routePaths.login.path);
  }

  function goCta() {
    setDrawerOpen(false);
    navigate(routePaths.login.path);
  }

  return (
    <header className="mag-header">
      <div className="mag-header-brand">
        <span className="mag-logo">EduCore</span>
        <span className="mag-tagline">Gestión académica · Colombia</span>
      </div>

      <nav className="mag-nav">
        {NAV_ITEMS.map((item) => (
          <span
            key={item.id}
            className="mag-nav-link"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </span>
        ))}
      </nav>

      <div className="mag-nav-cta">
        <button className="mag-cta-outline" onClick={goLogin} type="button">
          Iniciar sesión
        </button>
        <button className="mag-cta-primary" onClick={goCta} type="button">
          Crear mi colegio
        </button>
      </div>

      <button
        className="mag-burger"
        onClick={() => setDrawerOpen(!drawerOpen)}
        aria-label="Abrir menú"
      >
        {drawerOpen ? '✕' : '☰'}
      </button>

      <div className={`mag-drawer ${drawerOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <span
            key={item.id}
            className="mag-drawer-link"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </span>
        ))}
        <button
          type="button"
          className="mag-drawer-link mag-drawer-cta"
          onClick={goLogin}
        >
          Iniciar sesión
        </button>
        <button
          type="button"
          className="mag-drawer-link mag-drawer-cta"
          onClick={goCta}
        >
          Crear mi colegio
        </button>
      </div>
    </header>
  );
}