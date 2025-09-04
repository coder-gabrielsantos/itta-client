import { Link } from 'react-router-dom'
import { LogIn, UserRound } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

export function Navbar() {
    const { isAuthenticated, user } = useAuth() || {}

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500 tracking-tight"
                    >
                        Itta
                    </Link>

                    {/* Links */}
                    <div className="hidden sm:flex items-center gap-10">
                        <Link to="/dashboard"
                              className="relative text-base font-medium text-slate-200 hover:text-white transition group">
                            Dashboard
                            <span
                                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"/>
                        </Link>
                        <Link to="/resumes"
                              className="relative text-base font-medium text-slate-200 hover:text-white transition group">
                            Currículos
                            <span
                                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"/>
                        </Link>
                        <Link to="/interviews"
                              className="relative text-base font-medium text-slate-200 hover:text-white transition group">
                            Entrevista
                            <span
                                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"/>
                        </Link>
                        <Link to="/challenges"
                              className="relative text-base font-medium text-slate-200 hover:text-white transition group">
                            Desafios
                            <span
                                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"/>
                        </Link>
                    </div>

                    {/* Ação à direita */}
                    <div className="flex items-center gap-3">
                        {!isAuthenticated ? (
                            <Link
                                to="/login"
                                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-white text-sm font-medium
                           bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                            >
                                <LogIn className="h-5 w-5"/>
                                Entrar
                            </Link>
                        ) : (
                            <Link
                                to="/account"
                                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-white text-sm font-medium
                           bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                                title="Minha conta"
                            >
                                <div
                                    className="h-7 w-7 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                                    <UserRound className="h-4 w-4 text-blue-300"/>
                                </div>
                                <span className="hidden sm:inline">
                  {user?.name ? user.name.split(' ')[0] : 'Conta'}
                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
