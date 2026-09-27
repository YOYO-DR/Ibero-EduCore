import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { routePaths } from '@/routes/routePaths';
import { IconSchool, IconChevron } from './AdminIcons';

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
        <span className="adm-school-icon">
          <IconSchool size={16} />
        </span>
        <span className="adm-school-name">IE INCODELCA – Sede Principal</span>
        <span className="adm-school-domain">incodelca.educore.co</span>
        <span className="adm-school-icon">
          <IconChevron size={14} />
        </span>
      </div>

      <div className="adm-top-right">
        <span className="adm-pwa">
          <span className="adm-pwa-dot" />
          PWA Activa / Modo Optimizado
        </span>
        <div className="adm-user">
          <div className="adm-user-meta">
            <span className="adm-user-name">Ronald García</span>
            <span className="adm-user-role">Docente / Scrum Developer</span>
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
