import { Routes, Route, Navigate } from 'react-router-dom'

// Páginas
import Login from '../pages/Login'

// Exemplo de PrivateRoute simples
function PrivateRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem('token')
    return isAuthenticated ? children : <Navigate to="/login" replace/>
}

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
