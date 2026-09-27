import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '@/routes/routePaths';

const NAV_ITEMS = [
  { id: 'problema', label: 'El problema' },
  { id: 'costos', label: 'Costos' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'roles', label: 'Roles' },
  { id: 'seguridad', label: 'Seguridad' },
];

export default function LandingHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  function scrollTo(id) {
    setDrawerOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function goLogin() {
    setDrawerOpen(false);
    navigate(routePaths.login.path);
  }

  return (
    <header className="a2-nav">
      <div className="a2-nav-wrap">
        <span className="a2-logo">
          Edu<span className="a2-logo-accent">Core</span>
        </span>

        <nav className="a2-nav-links">
          {NAV_ITEMS.map((item) => (
            <span
              key={item.id}
              className="a2-nav-link"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </span>
          ))}
        </nav>

        <div className="a2-nav-actions">
          <button type="button" className="a2-btn-ghost" onClick={goLogin}>
            Iniciar sesión
          </button>
          <button type="button" className="a2-btn">
            Hablar con el equipo
          </button>
        </div>

        <button
          type="button"
          className="a2-burger"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {drawerOpen ? '✕' : '☰'}
        </button>

        <div className={`a2-drawer ${drawerOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="a2-drawer-link"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className="a2-drawer-sep" />
          <button type="button" className="a2-drawer-link" onClick={goLogin}>
            Iniciar sesión
          </button>
          <button type="button" className="a2-drawer-link">
            Hablar con el equipo
          </button>
        </div>
      </div>
    </header>
  );
}
