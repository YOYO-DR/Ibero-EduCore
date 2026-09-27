import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { routePaths } from '@/routes/routePaths';
import '@/presentation/components/login/login.css';

// Login de demostración: no llama al backend, solo abre la sesión simulada.
export default function LoginPage() {
  const navigate = useNavigate();
  const demoLogin = useAuthStore((s) => s.demoLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function ingresar(e) {
    e.preventDefault();
    demoLogin();
    navigate(routePaths.admin.path);
  }

  return (
    <div className="log-shell">
      <aside className="log-brand">
        <div>
          <div className="log-logo">
            Edu<span className="log-logo-accent">Core</span>
          </div>
          <div className="log-logo-sub">Gestión académica · Colombia</div>
        </div>

        <div>
          <div className="log-eyebrow">Para colegios oficiales pequeños</div>
          <h1 className="log-headline">
            Del Excel al boletín,{' '}
            <span className="log-headline-accent">sin pagar por estudiante.</span>
          </h1>
        </div>

        <div className="log-stat">
          <span className="log-stat-value">69,4%</span>
          <span className="log-stat-text">
            de las sedes educativas rurales del país carece de acceso a Internet.
          </span>
          <span className="log-stat-note">
            INFRAESTRUCTURA COMPARTIDA · ≈ USD 10 POR COLEGIO AL AÑO
          </span>
        </div>
      </aside>

      <div className="log-form-side">
        <form className="log-card" onSubmit={ingresar}>
          <h2 className="log-form-title">Iniciar sesión</h2>
          <p className="log-form-sub">Acceso al panel académico</p>

          <div className="log-field">
            <label className="log-label" htmlFor="log-email">
              Correo
            </label>
            <input
              id="log-email"
              className="log-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rector@colegio.edu.co"
              autoComplete="username"
            />
          </div>

          <div className="log-field">
            <label className="log-label" htmlFor="log-password">
              Contraseña
            </label>
            <input
              id="log-password"
              className="log-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="log-submit">
            Ingresar
          </button>

          <button
            type="button"
            className="log-back"
            onClick={() => navigate(routePaths.home.path)}
          >
            ← Volver al inicio
          </button>
        </form>
      </div>
    </div>
  );
}
