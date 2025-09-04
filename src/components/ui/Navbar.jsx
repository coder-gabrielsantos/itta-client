import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'

export function Navbar() {
    return (
        <nav className="w-full bg-slate-950 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo maior */}
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

                {/* Ícone login maior */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/login"
                        className="p-2 rounded-lg hover:bg-slate-800 transition flex items-center justify-center"
                    >
                        <LogIn className="h-6 w-6 text-blue-400 hover:text-blue-300"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
