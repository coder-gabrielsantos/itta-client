import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'

export default function SiteLayout() {
    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
            {/* Camada de gradientes cobrindo a tela toda */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background:
                        'radial-gradient(900px 450px at 12% -10%, rgba(59,130,246,0.22), transparent 60%), radial-gradient(900px 450px at 88% -12%, rgba(99,102,241,0.20), transparent 60%)'
                }}
            />

            <header>
                <Navbar/>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-6 pt-20">
                <Outlet/>
            </main>
        </div>
    )
}
