import { useState } from 'react'
import { Logo } from '../components/ui/Logo'
import { TextField } from '../components/ui/TextField'
import { PasswordField } from '../components/ui/PasswordField'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'
import { OAuthButton } from '../components/ui/OAuthButton'
import { AuthLayout } from '../components/ui/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'

// Ícones
import { User, Mail } from 'lucide-react'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            console.log({ name, email, password })
            navigate('/')
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthLayout>
            <div className="space-y-6">
                {/* Logo + ano */}
                <div className="flex items-center justify-between">
                    <Logo/>
                    <span className="text-sm text-slate-400">© Itta 2025</span>
                </div>

                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-white">Crie sua conta</h1>
                    <p className="text-base text-slate-400">É rápido e fácil</p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-lg"
                >
                    <TextField
                        type="text"
                        placeholder="Nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        leftIcon={User}
                    />

                    <TextField
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        leftIcon={Mail}
                    />

                    <PasswordField
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" disabled={loading} className="w-full text-lg py-3">
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </Button>

                    <Divider>ou</Divider>

                    <OAuthButton
                        provider="Google"
                        className="!text-slate-100 !bg-slate-800 hover:!bg-slate-700 w-full text-base py-3"
                        onClick={() => alert('Google OAuth')}
                    />

                    <p className="text-center text-sm text-slate-300">
                        Já tem uma conta?{' '}
                        <Link to="/login" className="text-blue-400 hover:text-blue-300 transition">
                            Entre aqui
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}
