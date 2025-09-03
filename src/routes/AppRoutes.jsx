// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import AuthLayoutRoute from '../layouts/AuthLayoutRoute'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

function PrivateRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem('token')
    return isAuthenticated ? children : <Navigate to="/login" replace/>
}

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayoutRoute/>}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Route>

            <Route element={<SiteLayout/>}>
                <Route index element={<Home/>}/>
                {/* exemplo de rota protegida */}
                <Route path="/dashboard" element={<PrivateRoute>
                    <div className="p-6">Dashboard (placeholder)</div>
                </PrivateRoute>}/>
            </Route>

            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    )
}
