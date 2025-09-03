import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'

export default function Home() {
    const isAuthenticated = !!localStorage.getItem('token')
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
            {isAuthenticated ? <DashboardQuickStart/> : <MarketingHome/>}
            <Footer/>
        </div>
    )
}

/** ----------------- Marketing (visitante) ----------------- */
function MarketingHome() {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                        background:
                            'radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,.15), transparent 60%), radial-gradient(800px 400px at 80% 0%, rgba(99,102,241,.16), transparent 60%)'
                    }}
                />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-5">
                            <div
                                className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 border shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/>
                                <span className="text-[11px] font-medium text-gray-700">MVP ativo • feedback guiado por IA</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                                Evolua em tecnologia com<br className="hidden sm:block"/>
                                <span
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                                    entrevistas simuladas e desafios reais
                                </span>
                            </h1>

                            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
                                Melhore seu currículo, pratique entrevistas e resolva desafios com correção automática.
                                Tudo em um só lugar — com métricas claras da sua evolução.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-1">
                                <Link to="/signup"><Button>Começar agora</Button></Link>
                                <Link to="/login"><Button variant="secondary">Entrar</Button></Link>
                            </div>

                            <div className="grid grid-cols-3 max-w-md mt-6 text-center">
                                <Stat k="+100" v="currículos analisados"/>
                                <Stat k="7 dias" v="até a 1ª entrevista"/>
                                <Stat k="+80%" v="desafios concluídos"/>
                            </div>
                        </div>

                        {/* Card “glass” de preview */}
                        <div className="bg-white/70 backdrop-blur rounded-2xl border shadow-sm p-5 lg:p-6">
                            <div
                                className="h-60 sm:h-72 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border flex items-center justify-center">
                                <span className="text-sm text-gray-500">Preview do Dashboard (placeholder)</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                                <MiniCard title="Currículo" value="score 78/100"/>
                                <MiniCard title="Desafios" value="12 resolvidos"/>
                                <MiniCard title="Entrevistas" value="2 feedbacks"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <Divider>Recursos principais</Divider>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard
                        title="Análise de Currículo"
                        desc="Upload do CV, parsing e sugestões de melhoria objetivas."
                        cta="Enviar CV"
                        to="/resumes"
                    />
                    <FeatureCard
                        title="Simulador de Entrevistas"
                        desc="Perguntas por stack ou baseadas no seu currículo, com rubric."
                        cta="Praticar"
                        to="/interviews"
                    />
                    <FeatureCard
                        title="Desafios de Programação"
                        desc="Editor + sandbox com testes públicos/ocultos e feedback."
                        cta="Resolver"
                        to="/challenges"
                    />
                    <FeatureCard
                        title="Dashboard & Gamificação"
                        desc="Acompanhe progresso, badges e metas semanais."
                        cta="Ver progresso"
                        to="/dashboard"
                    />
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="rounded-2xl border bg-white/80 backdrop-blur p-6 sm:p-10 text-center shadow-sm">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Pronto para acelerar sua carreira?</h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">Crie sua conta gratuita e comece hoje
                        mesmo.</p>
                    <div className="mt-4 flex justify-center gap-3">
                        <Link to="/signup"><Button>Criar conta</Button></Link>
                        <Link to="/login"><Button variant="secondary">Já tenho conta</Button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

/** ----------------- Quick dashboard (logado) ----------------- */
function DashboardQuickStart() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
            <div className="flex items-end justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-semibold">Bem-vindo de volta 👋</h1>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                        Continue de onde parou: currículo, entrevista ou desafios.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link to="/dashboard"><Button size="sm">Ver dashboard</Button></Link>
                    <Link to="/challenges"><Button size="sm" variant="secondary">Explorar desafios</Button></Link>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mt-6">
                <QuickCard
                    title="Currículo"
                    desc="Envie/analise seu CV e aplique melhorias."
                    primary={{ label: 'Ir para Currículos', to: '/resumes' }}
                />
                <QuickCard
                    title="Entrevista simulada"
                    desc="Pratique perguntas por stack ou pelo seu CV."
                    primary={{ label: 'Iniciar', to: '/interviews' }}
                />
                <QuickCard
                    title="Desafios"
                    desc="Resolva problemas com sandbox e testes."
                    primary={{ label: 'Resolver', to: '/challenges' }}
                />
            </div>

            <div className="rounded-2xl border bg-white/80 backdrop-blur p-5 mt-6 shadow-sm">
                <h2 className="text-lg font-semibold">Progresso recente</h2>
                <div className="mt-3 grid sm:grid-cols-3 gap-3">
                    <MiniCard title="Score de CV" value="78/100"/>
                    <MiniCard title="Desafios semana" value="3/5"/>
                    <MiniCard title="Feedbacks" value="2 novos"/>
                </div>
            </div>
        </section>
    )
}

/** ----------------- Pequenos componentes ----------------- */
function FeatureCard({ title, desc, cta, to }) {
    return (
        <div className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow transition">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
            <div className="mt-4">
                <Link to={to}><Button size="sm">{cta}</Button></Link>
            </div>
        </div>
    )
}

function QuickCard({ title, desc, primary }) {
    return (
        <div className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow transition">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
            <div className="mt-4 flex gap-2">
                <Link to={primary.to}><Button size="sm">{primary.label}</Button></Link>
            </div>
        </div>
    )
}

function Stat({ k, v }) {
    return (
        <div className="p-3">
            <div className="text-xl font-semibold">{k}</div>
            <div className="text-xs text-gray-500">{v}</div>
        </div>
    )
}

function MiniCard({ title, value }) {
    return (
        <div className="rounded-xl border p-3 bg-white">
            <div className="text-xs text-gray-500">{title}</div>
            <div className="text-sm font-medium">{value}</div>
        </div>
    )
}

function Footer() {
    return (
        <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-xs text-gray-500 flex items-center justify-between">
                <span>© Itta {new Date().getFullYear()}</span>
                <div className="flex gap-4">
                    <Link to="#" className="hover:underline">Termos</Link>
                    <Link to="#" className="hover:underline">Privacidade</Link>
                    <Link to="#" className="hover:underline">Contato</Link>
                </div>
            </div>
        </footer>
    )
}
