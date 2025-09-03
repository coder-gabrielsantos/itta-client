import { useState } from 'react'
import { Logo } from '../components/ui/Logo'
import { TextField } from '../components/ui/TextField'
import { PasswordField } from '../components/ui/PasswordField'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'
import { OAuthButton } from '../components/ui/OAuthButton'
import { AuthLayout } from '../components/ui/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'

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
            // aqui você chamaria sua API: fetch('/api/auth/signup', { ... })
            console.log({ name, email, password })
            navigate('/')
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <Logo/>
                    <span className="text-xs text-gray-400">© Itta 2025</span>
                </div>

                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold">Crie sua conta</h1>
                    <p className="text-xs text-gray-500">É rápido e fácil</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-white border rounded-xl p-6 shadow-md"
                >
                    <TextField
                        type="text"
                        placeholder="Nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <PasswordField
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </Button>

                    <Divider>ou</Divider>

                    <OAuthButton provider="Google" onClick={() => alert('Google OAuth')}/>

                    <p className="text-center text-xs text-gray-600">
                        Já tem uma conta?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Entre aqui
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}
