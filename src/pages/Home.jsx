import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'

export default function Home() {
    const isAuthenticated = !!localStorage.getItem('token')
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {isAuthenticated ? <DashboardQuickStart /> : <MarketingHome />}
            <Footer />
        </div>
    )
}

/* -------- Marketing (visitante) -------- */
function MarketingHome() {
    return (
        <>
            {/* HERO */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                            Prepare-se para sua próxima oportunidade em tecnologia
                        </h1>
                        <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
                            Simule entrevistas, melhore seu currículo e pratique desafios de programação —
                            tudo em um só lugar, com feedback claro e mensurável.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/signup">
                                <Button className="text-lg px-6 py-3">Começar agora</Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="secondary" className="text-lg px-6 py-3">Entrar</Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 max-w-md mt-10 text-center">
                            <Stat k="+100" v="currículos analisados" />
                            <Stat k="7 dias" v="até a 1ª entrevista" />
                            <Stat k="+80%" v="desafios concluídos" />
                        </div>
                    </div>

                    {/* Painel ilustrativo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-slate-900/70 border border-slate-700 rounded-2xl shadow-xl p-8"
                    >
                        <div className="h-60 sm:h-72 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <span className="text-base text-slate-400">Preview do Dashboard (placeholder)</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                            <MiniCard title="Currículo" value="score 78/100" />
                            <MiniCard title="Desafios" value="12 resolvidos" />
                            <MiniCard title="Entrevistas" value="2 feedbacks" />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* FEATURES */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <Divider>Recursos principais</Divider>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { staggerChildren: 0.2, duration: 0.6 }
                        }
                    }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {[
                        { title: 'Análise de Currículo', desc: 'Upload do CV, parsing e sugestões objetivas.', cta: 'Enviar CV', to: '/resumes' },
                        { title: 'Simulador de Entrevistas', desc: 'Perguntas por stack ou currículo, com rubric.', cta: 'Praticar', to: '/interviews' },
                        { title: 'Desafios de Programação', desc: 'Editor + sandbox com testes públicos/ocultos.', cta: 'Resolver', to: '/challenges' },
                        { title: 'Dashboard & Gamificação', desc: 'Progresso, badges e metas semanais.', cta: 'Ver progresso', to: '/dashboard' }
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <FeatureCard {...f} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA FINAL */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
            >
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-10 sm:p-14 text-center shadow-lg">
                    <h2 className="text-3xl sm:text-4xl font-bold">Pronto para acelerar sua carreira?</h2>
                    <p className="text-slate-300 text-lg mt-3 max-w-2xl mx-auto">
                        Crie sua conta gratuita e comece hoje mesmo.
                    </p>
                    <div className="mt-6 flex justify-center gap-5">
                        <Link to="/signup">
                            <Button className="text-lg px-6 py-3">Criar conta</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="secondary" className="text-lg px-6 py-3">Já tenho conta</Button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

/* -------- Cards -------- */
function FeatureCard({ title, desc, cta, to }) {
    return (
        <div className="h-full rounded-2xl bg-slate-900/70 border border-slate-700 shadow-md p-6 hover:border-blue-400/50 transition flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-base text-slate-300 mt-2 leading-relaxed">{desc}</p>
            </div>
            <div className="mt-4">
                <Link to={to}>
                    <Button size="sm" className="text-sm w-full">{cta}</Button>
                </Link>
            </div>
        </div>
    )
}

function QuickCard({ title, desc, primary }) {
    return (
        <div className="rounded-2xl bg-slate-900/70 border border-slate-700 shadow-md p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-base text-slate-300 mt-2 leading-relaxed">{desc}</p>
            <div className="mt-4">
                <Link to={primary.to}>
                    <Button size="sm" className="text-sm">{primary.label}</Button>
                </Link>
            </div>
        </div>
    )
}

function Stat({ k, v }) {
    return (
        <div className="p-3">
            <div className="text-2xl font-bold text-white">{k}</div>
            <div className="text-base text-slate-400">{v}</div>
        </div>
    )
}

function MiniCard({ title, value }) {
    return (
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <div className="text-sm text-slate-400">{title}</div>
            <div className="text-lg font-medium text-slate-100">{value}</div>
        </div>
    )
}

function Footer() {
    return (
        <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-sm text-slate-500 flex items-center justify-between">
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
