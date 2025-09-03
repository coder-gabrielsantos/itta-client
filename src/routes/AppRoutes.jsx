import { Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import SiteLayout from '../layouts/SiteLayout'
import AuthLayoutRoute from '../layouts/AuthLayoutRoute'

// Páginas
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

// PrivateRoute simples (exemplo)
function PrivateRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem('token')
    return isAuthenticated ? children : <Navigate to="/login" replace />
}

export function AppRoutes() {
    return (
        <Routes>
            {/* Rotas de autenticação (sem Navbar) */}
            <Route element={<AuthLayoutRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Route>

            {/* Rotas do site (com Navbar + container) */}
            <Route element={<SiteLayout />}>

            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
