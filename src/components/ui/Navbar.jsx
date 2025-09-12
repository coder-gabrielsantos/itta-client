import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CircleUser, LogIn, Menu, X } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

export function Navbar() {
    const { isAuthenticated } = useAuth() || {}
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false)
    const panelRef = useRef(null)

    useEffect(() => setOpen(false), [pathname])

    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') setOpen(false)
        }
        function onClick(e) {
            if (open && panelRef.current && !panelRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('keydown', onKey)
        document.addEventListener('mousedown', onClick)
        return () => {
            document.removeEventListener('keydown', onKey)
            document.removeEventListener('mousedown', onClick)
        }
    }, [open])

    const links = useMemo(
        () => [
            { to: '/dashboard', label: 'Dashboard' },
            { to: '/resumes', label: 'Currículos' },
            { to: '/interviews', label: 'Entrevistas' },
        ],
        []
    )

    const isActive = (to) => pathname === to || pathname.startsWith(to + '/')

    return (
        <header className='fixed top-0 inset-x-0 z-50 bg-slate-950/95 border-b border-slate-800'>
            <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='h-14 flex items-center justify-between'>
                    {/* Logo colorida */}
                    <Link to='/' className='inline-flex items-center gap-2 group'>
            <span className='text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-400'>
              Itta
            </span>
                        <span className='sr-only'>Página inicial</span>
                    </Link>

                    {/* Links desktop */}
                    <div className='hidden sm:flex items-center gap-6'>
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={
                                    'group relative text-sm font-medium transition-colors ' +
                                    (isActive(link.to) ? 'text-white' : 'text-slate-300 hover:text-white')
                                }
                            >
                                {link.label}
                                {/* underline animada */}
                                <span
                                    className={
                                        'pointer-events-none absolute left-0 -bottom-1 h-0.5 origin-left ' +
                                        'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-400 ' +
                                        'transition-transform duration-300 ease-out ' +
                                        (isActive(link.to) ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100')
                                    }
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Ações */}
                    <div className='flex items-center gap-2'>
                        {!isAuthenticated ? (
                            <Link
                                to='/login'
                                className='inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-white border border-slate-700 hover:border-slate-500'
                                title='Entrar'
                            >
                                <LogIn className='h-5 w-5' />
                                <span>Entrar</span>
                            </Link>
                        ) : (
                            <Link
                                to='/account'
                                className='inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-white border border-slate-700 hover:border-slate-500'
                                title='Minha conta'
                            >
                                <CircleUser className='h-5 w-5' />
                                <span>Minha conta</span>
                            </Link>
                        )}

                        {/* Botão menu mobile */}
                        <button
                            type='button'
                            onClick={() => setOpen(true)}
                            aria-label='Abrir menu'
                            className='sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-200 border border-slate-700 hover:border-slate-500'
                        >
                            <Menu className='h-5 w-5' />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={
                    'sm:hidden fixed inset-0 z-40 bg-black/40 transition-opacity ' +
                    (open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')
                }
            />

            {/* Painel mobile */}
            <aside
                ref={panelRef}
                aria-hidden={!open}
                className={
                    'sm:hidden fixed right-0 top-0 z-50 h-full w-[80%] max-w-[340px] bg-slate-950 border-l border-slate-800 transition-transform duration-200 ' +
                    (open ? 'translate-x-0' : 'translate-x-full')
                }
            >
                <div className='flex items-center justify-between px-4 h-14 border-b border-slate-800'>
                    <span className='text-sm font-semibold text-white'>Menu</span>
                    <button
                        type='button'
                        onClick={() => setOpen(false)}
                        aria-label='Fechar menu'
                        className='inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 text-slate-200 hover:border-slate-500'
                    >
                        <X className='h-5 w-5' />
                    </button>
                </div>

                <div className='p-3'>
                    <div className='flex flex-col'>
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={
                                    'relative px-3 py-3 text-sm border-b border-slate-800 last:border-b-0 ' +
                                    (isActive(link.to) ? 'text-white' : 'text-slate-300 hover:text-white')
                                }
                            >
                                {link.label}
                                {/* underline animada no mobile também */}
                                <span
                                    className={
                                        'pointer-events-none absolute left-3 right-3 bottom-1 h-0.5 origin-left ' +
                                        'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-400 transition-transform duration-300 ' +
                                        (isActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')
                                    }
                                />
                            </Link>
                        ))}
                    </div>

                    <div className='mt-4'>
                        {!isAuthenticated ? (
                            <Link
                                to='/login'
                                className='w-full inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white border border-slate-700 hover:border-slate-500'
                            >
                                <LogIn className='h-5 w-5' /> Entrar
                            </Link>
                        ) : (
                            <Link
                                to='/account'
                                className='w-full inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white border border-slate-700 hover:border-slate-500'
                            >
                                <CircleUser className='h-5 w-5' /> Minha conta
                            </Link>
                        )}
                    </div>
                </div>
            </aside>
        </header>
    )
}
