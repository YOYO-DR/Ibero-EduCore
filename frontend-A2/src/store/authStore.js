import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Auth store. Solo persiste el access token y el user.
 * El refresh token NO se persiste aquí — vive en cookie HttpOnly.
 *
 * `demoLoggedIn` es la sesión simulada del frontend (sin backend): vive en
 * sessionStorage para que un recargo no cierre la sesión, y queda fuera del
 * `partialize` de abajo para no mezclarse con la autenticación real.
 */
const DEMO_KEY = 'educore-demo-session'

export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      access: null,
      isAuthenticated: false,
      demoLoggedIn:
        typeof sessionStorage !== 'undefined' &&
        sessionStorage.getItem(DEMO_KEY) === '1',

      demoLogin: () => {
        sessionStorage.setItem(DEMO_KEY, '1')
        set({ demoLoggedIn: true })
      },

      demoLogout: () => {
        sessionStorage.removeItem(DEMO_KEY)
        set({ demoLoggedIn: false })
      },

      login: (userData, accessToken) =>
        set({
          user: userData,
          access: accessToken,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          access: null,
          isAuthenticated: false,
        }),

      setAccess: (accessToken) => set({ access: accessToken }),

      setUser: (userData) => set({ user: userData }),
    }),
    {
      name: 'auth-settings',
      partialize: (state) => ({
        user: state.user,
        access: state.access,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
