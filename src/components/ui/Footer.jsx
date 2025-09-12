import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10'>
            <div className='text-sm text-slate-500 flex items-center justify-between'>
                <span>© Itta {new Date().getFullYear()}</span>
                <div className='flex gap-4'>
                    <Link to='#' className='hover:underline'>Termos</Link>
                    <Link to='#' className='hover:underline'>Privacidade</Link>
                    <Link to='#' className='hover:underline'>Contato</Link>
                </div>
            </div>
        </footer>
    )
}
