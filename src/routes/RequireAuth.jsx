import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function RequireAuth({ children }) {
    const { isAuthenticated, loading } = useAuth()
    const loc = useLocation()
    if (loading) return null
    if (!isAuthenticated) return <Navigate to="/login" state={{ from: loc }} replace/>
    return children
}
