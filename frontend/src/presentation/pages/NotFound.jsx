import { Link } from 'react-router-dom';
import { routePaths } from '@/routes/routePaths';

export default function NotFound() {
  return (
    <main
      style={{
        padding: 24,
        minHeight: '100vh',
        background: 'var(--paper)',
        color: 'var(--ink)',
      }}
    >
      <h1
        style={{
          fontSize: 48,
          fontWeight: 500,
          fontFamily: "'Newsreader', serif",
          color: 'var(--ink)',
        }}
      >
        404
      </h1>
      <p style={{ color: 'var(--ink-mute)' }}>La ruta que buscas no existe.</p>
      <Link to={routePaths.home.path} style={{ color: 'var(--accent)' }}>
        ← Volver al inicio
      </Link>
    </main>
  );
}
