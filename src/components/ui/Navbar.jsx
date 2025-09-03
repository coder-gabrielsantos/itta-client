import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Navbar() {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'))

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        navigate('/login')
    }

    const linkBase = 'px-3 py-2 rounded hover:bg-gray-200 text-sm font-medium'
    const getLinkClass = ({ isActive }) =>
        isActive ? `${linkBase} bg-gray-200` : linkBase

    return (
        <header className="bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
                {/* Logo */}
                <Link to="/" className="font-bold text-lg text-pink-600">
                    Itta
                </Link>

                {/* Links principais */}
                <nav className="flex gap-2">
                    <NavLink to="/" className={getLinkClass}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/resumes/upload" className={getLinkClass}>
                        Currículos
                    </NavLink>
                    <NavLink to="/interview" className={getLinkClass}>
                        Entrevista
                    </NavLink>
                    <NavLink to="/challenges" className={getLinkClass}>
                        Desafios
                    </NavLink>
                    <NavLink to="/admin" className={getLinkClass}>
                        Admin
                    </NavLink>
                </nav>

                {/* Espaço automático pra empurrar login/logout pra direita */}
                <div className="ml-auto flex items-center gap-3">
                    {isLoggedIn ? (
                        <>
                            <span className="text-sm text-gray-600">Olá 👋</span>
                            <button
                                onClick={handleLogout}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Sair
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Entrar
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}
