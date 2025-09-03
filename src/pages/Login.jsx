import { useState } from 'react'
import { Logo } from '../components/ui/Logo'
import { TextField } from '../components/ui/TextField'
import { PasswordField } from '../components/ui/PasswordField'
import { Checkbox } from '../components/ui/Checkbox'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'
import { OAuthButton } from '../components/ui/OAuthButton'
import { AuthLayout } from '../components/ui/AuthLayout'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            // aqui você conecta com seu backend: fetch('/api/auth/signin', { ... })
            console.log({ email, password, remember })
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
                    <h1 className="text-2xl font-semibold">Bem-vindo de volta</h1>
                    <p className="text-xs text-gray-500">Entre com sua conta</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 bg-white border rounded-xl p-6 shadow-sm">
                    <TextField
                        label="Email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <PasswordField
                        label="Senha"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex items-center justify-between">
                        <Checkbox id="remember" label="Lembrar-me" checked={remember}
                                  onChange={(e) => setRemember(e.target.checked)}/>
                        <Link to="#" className="text-xs text-blue-600 hover:underline">Esqueceu a senha?</Link>
                    </div>

                    <Button type="submit" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</Button>

                    <Divider>ou</Divider>

                    <OAuthButton provider="Google" onClick={() => alert('Google OAuth')}/>

                    <p className="text-center text-xs text-gray-600">
                        Não tem conta? <Link to="#" className="text-blue-600 hover:underline">Cadastre-se</Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}
