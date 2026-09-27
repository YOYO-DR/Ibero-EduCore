import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routePaths } from './routePaths';
import { useAuthStore } from '@/store/authStore';
import LandingPage from '@/presentation/pages/LandingPage';
import LoginPage from '@/presentation/pages/LoginPage';
import AdminPage from '@/presentation/pages/AdminPage';
import NotFound from '@/presentation/pages/NotFound';

/**
 * /admin sin sesión simulada → /login.
 * La sesión se evalúa al montar: si fuera reactiva, el `demoLogout()` del
 * header pisaría la navegación hacia `/` (React Router difiere esa navegación
 * y el guard redirige a /login antes de que se confirme).
 */
function RequireDemoAuth({ children }) {
  const demoLoggedIn = useAuthStore((s) => s.demoLoggedIn);
  const [allowedIn] = useState(demoLoggedIn);
  return allowedIn ? children : <Navigate to={routePaths.login.path} replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routePaths.home.path} element={<LandingPage />} />
      <Route path={routePaths.login.path} element={<LoginPage />} />
      <Route
        path={routePaths.admin.path}
        element={
          <RequireDemoAuth>
            <AdminPage />
          </RequireDemoAuth>
        }
      />
      <Route path={routePaths.pageNotFound.path} element={<NotFound />} />
    </Routes>
  );
}
