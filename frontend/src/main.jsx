import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ponytail: api/authService y api/apiClient quedan sin uso — el login es simulado.
// Volver a llamar initApiClient() cuando se conecte el backend.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
