import { AppRoutes } from './routes/AppRoutes'
import { useLocation } from 'react-router-dom'
import { Navbar } from './components/ui/Navbar'

export default function App() {
    const location = useLocation()
    const isAuthPage = location.pathname === '/login'

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {!isAuthPage && <Navbar />}
            {isAuthPage ? (
                <AppRoutes />
            ) : (
                <main className="max-w-7xl mx-auto p-4">
                    <AppRoutes />
                </main>
            )}
        </div>
    )
}
