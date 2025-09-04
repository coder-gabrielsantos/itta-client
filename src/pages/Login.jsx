import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Logo } from '../components/ui/Logo'
import { TextField } from '../components/ui/TextField'
import { PasswordField } from '../components/ui/PasswordField'
import { Checkbox } from '../components/ui/Checkbox'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'
import { OAuthButton } from '../components/ui/OAuthButton'
import { AuthLayout } from '../components/ui/AuthLayout'
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await login({ email, password })
            navigate('/dashboard') // ou '/' como preferir
        } catch (err) {
            alert(err.message || 'Falha no login')
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthLayout>
            <div className="space-y-6">
                {/* Header com logo */}
                <div className="flex items-center justify-between">
                    <Logo/>
                    <span className="text-sm text-slate-400">© Itta 2025</span>
                </div>

                {/* Título / Subtítulo */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-white">Bem-vindo de volta</h1>
                    <p className="text-base text-slate-400">Entre com sua conta</p>
                </div>

                {/* Formulário */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-lg"
                >
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

                    <div className="flex items-center justify-between">
                        <Checkbox
                            id="remember"
                            label="Lembrar-me"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                            className="text-sm text-slate-300"
                        />
                        <Link to="#" className="text-sm text-blue-400 hover:text-blue-300 transition">
                            Esqueceu a senha?
                        </Link>
                    </div>

                    <Button type="submit" disabled={loading} className="w-full text-lg py-3 shadow-md">
                        {loading ? 'Entrando...' : 'Entrar'}
                    </Button>

                    <Divider>ou</Divider>

                    <OAuthButton
                        provider="Google"
                        className="!text-slate-100 !bg-slate-800 hover:!bg-slate-700 w-full text-base py-3"
                        onClick={() => alert('Google OAuth')}
                    />

                    <p className="text-center text-sm text-slate-300">
                        Não tem conta?{' '}
                        <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}
