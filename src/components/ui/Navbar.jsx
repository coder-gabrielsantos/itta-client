import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'

export function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
            {/* container alinhado com o resto do site */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500 tracking-tight"
                    >
                        Itta
                    </Link>

                    {/* Links principais */}
                    <div className="hidden sm:flex items-center gap-10">
                        {[
                            { to: '/dashboard', label: 'Dashboard' },
                            { to: '/resumes', label: 'Currículos' },
                            { to: '/interviews', label: 'Entrevista' },
                            { to: '/challenges', label: 'Desafios' },
                            { to: '/admin', label: 'Admin' },
                        ].map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="relative text-base font-medium text-slate-200 hover:text-white transition group"
                            >
                                {link.label}
                                <span
                                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"/>
                            </Link>
                        ))}
                    </div>

                    {/* Botão Entrar clean */}
                    <Link
                        to="/login"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-white text-sm font-medium
                        bg-white/10 backdrop-blur-sm
                        hover:bg-white/20 hover:text-white transition"
                    >
                        <LogIn className="h-5 w-5"/>
                        Entrar
                    </Link>
                </div>
            </div>
        </nav>
    )
}
