import { Link } from 'react-router-dom';
import { routePaths } from '@/routes/routePaths';

export default function NotFound() {
  return (
    <main style={{ padding: 24, color: '#f1f5f9', background: '#0a0e1a', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1>
      <p style={{ color: '#94a3b8' }}>La ruta que buscas no existe.</p>
      <Link to={routePaths.home.path} style={{ color: '#3b82f6' }}>
        ← Volver al inicio
      </Link>
    </main>
  );
}