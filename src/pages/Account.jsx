import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'

export default function Account() {
    const { user } = useAuth()
    const [name, setName] = useState(user?.name || '')
    const [email, setEmail] = useState(user?.email || '')
    const [current, setCurrent] = useState('')
    const [next, setNext] = useState('')
    const [confirm, setConfirm] = useState('')

    return (
        <div className="min-h-screen pt-24 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Cabeçalho */}
                <header className="space-y-2">
                    <h1 className="text-3xl font-bold text-white">Minha conta</h1>
                    <p className="text-slate-400">Gerencie seus dados, senha e segurança.</p>
                </header>

                {/* Dados do perfil */}
                <section className="rounded-2xl bg-slate-900/70 border border-slate-700 p-6 space-y-5">
                    <h2 className="text-lg font-semibold text-white">Dados do perfil</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <label className="space-y-1">
                            <span className="text-sm text-slate-300">Nome</span>
                            <input
                                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 text-slate-100 placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Seu nome"
                            />
                        </label>
                        <label className="space-y-1">
                            <span className="text-sm text-slate-300">Email</span>
                            <input
                                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 text-slate-100 placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="seu@email.com"
                            />
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <Button className="px-6">Salvar alterações</Button>
                    </div>
                </section>

                <Divider>Segurança</Divider>

                {/* Alterar senha */}
                <section className="rounded-2xl bg-slate-900/70 border border-slate-700 p-6 space-y-5">
                    <h2 className="text-lg font-semibold text-white">Alterar senha</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <label className="space-y-1">
                            <span className="text-sm text-slate-300">Senha atual</span>
                            <input
                                type="password"
                                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 text-slate-100 placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                                value={current}
                                onChange={(e) => setCurrent(e.target.value)}
                                placeholder="••••••••"
                            />
                        </label>
                        <label className="space-y-1">
                            <span className="text-sm text-slate-300">Nova senha</span>
                            <input
                                type="password"
                                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 text-slate-100 placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                                value={next}
                                onChange={(e) => setNext(e.target.value)}
                                placeholder="••••••••"
                            />
                        </label>
                        <label className="space-y-1">
                            <span className="text-sm text-slate-300">Confirmar senha</span>
                            <input
                                type="password"
                                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 text-slate-100 placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                placeholder="••••••••"
                            />
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <Button className="px-6">Atualizar senha</Button>
                    </div>
                </section>

                {/* Sessões / Danger zone (esboço) */}
                <section className="rounded-2xl bg-slate-900/70 border border-slate-700 p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-white">Sessões & segurança</h2>
                    <p className="text-sm text-slate-400">
                        Em breve: encerrar sessões ativas, ativar 2FA e revisar dispositivos confiáveis.
                    </p>
                    <div className="flex justify-end">
                        <Button variant="secondary" className="px-6">Encerrar todas as sessões</Button>
                    </div>
                </section>
            </div>
        </div>
    )
}
