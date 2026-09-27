import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { routePaths } from '@/routes/routePaths';

export default function AdminTopbar({ onToggleMenu }) {
  const navigate = useNavigate();
  const demoLogout = useAuthStore((s) => s.demoLogout);

  function salir() {
    // Navegar antes de borrar la sesión: si se borra primero, el guard de
    // /admin re-renderiza y redirige a /login pisando esta navegación.
    navigate(routePaths.home.path);
    demoLogout();
  }

  return (
    <header className="adm-top">
      <button
        type="button"
        className="adm-burger"
        onClick={onToggleMenu}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <div className="adm-school">
        <span className="adm-school-name">IE INCODELCA · Sede principal</span>
        <span className="adm-school-domain">incodelca.educore.co</span>
        <span className="adm-school-caret">▾</span>
      </div>

      <div className="adm-top-right">
        <div className="adm-pwa">
          <span className="adm-pwa-dot" />
          PWA ACTIVA · MODO OPTIMIZADO
        </div>
        <div className="adm-user">
          <div className="adm-user-meta">
            <span className="adm-user-name">Ronald García</span>
            <span className="adm-user-role">Rector · Administrador</span>
          </div>
          <button
            type="button"
            className="adm-avatar"
            onClick={salir}
            title="Cerrar sesión y volver al inicio"
            aria-label="Cerrar sesión"
          >
            RG
          </button>
        </div>
      </div>
    </header>
  );
}
