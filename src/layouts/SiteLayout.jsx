import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'

export default function SiteLayout() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Navbar/>
            <main className="max-w-7xl mx-auto p-4">
                <Outlet/>
            </main>
        </div>
    )
}
