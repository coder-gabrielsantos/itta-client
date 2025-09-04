import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'
import { Mic, Keyboard, ShieldCheck, Timer, BadgeCheck } from 'lucide-react'

export default function InterviewIntro() {
    return (
        // ❌ nada de bg-gradient aqui; o fundo vem do SiteLayout
        <section className="flex items-center justify-center px-4">
            <div className="w-full max-w-4xl rounded-3xl shadow-xl border border-slate-700 bg-slate-900/70 p-8 sm:p-12 space-y-10">
                {/* Cabeçalho */}
                <header className="text-center space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        Simulador de Entrevistas
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                        Treine respostas com perguntas geradas por IA e receba um feedback estruturado no final.
                    </p>
                </header>

                {/* Como funciona */}
                <section className="grid gap-6 sm:grid-cols-3">
                    <InfoCard
                        icon={<Timer className="h-5 w-5 text-blue-400" />}
                        title="Duração"
                        desc="~10–15 min (modo curto). Você pode pausar a qualquer momento."
                    />
                    <InfoCard
                        icon={<BadgeCheck className="h-5 w-5 text-indigo-400" />}
                        title="Avaliação"
                        desc="Clareza, profundidade técnica, precisão e comunicação."
                    />
                    <InfoCard
                        icon={<ShieldCheck className="h-5 w-5 text-emerald-400" />}
                        title="Privacidade"
                        desc="Suas respostas são usadas apenas para gerar feedback e histórico."
                    />
                </section>

                <Divider>O que esperar</Divider>

                {/* Expectativas */}
                <section className="grid gap-6 sm:grid-cols-2">
                    <GlassItem
                        icon={<Keyboard className="h-5 w-5 text-blue-400" />}
                        title="Formato"
                        desc="Nesta primeira versão, as respostas serão em texto. Em breve, modo voz."
                    />
                    <GlassItem
                        icon={<Mic className="h-5 w-5 text-indigo-400" />}
                        title="Perguntas"
                        desc="Por stack (ex.: Backend/Frontend/Data) ou com base no seu currículo."
                    />
                </section>

                {/* Dicas rápidas */}
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold text-slate-100">Dicas rápidas</h2>
                    <ul className="text-sm text-slate-300 grid gap-2 list-disc pl-5">
                        <li>Use a técnica STAR (Situação, Tarefa, Ação, Resultado) quando fizer sentido.</li>
                        <li>Explique decisões técnicas (trade-offs) e cite complexidade quando aplicável.</li>
                        <li>Mantenha respostas objetivas; detalhe apenas o essencial para demonstrar domínio.</li>
                    </ul>
                </section>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4">
                    <p className="text-xs text-slate-400 max-w-sm">
                        Ao iniciar, a IA fará perguntas sequenciais e ao término você receberá um relatório com pontuações e sugestões.
                    </p>
                    <Link to="/interviews/session">
                        <Button>Iniciar entrevista</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

function InfoCard({ icon, title, desc }) {
    return (
        <div className="rounded-2xl bg-slate-900/60 shadow-sm p-5 border border-slate-700">
            <div className="flex items-center gap-3">
        <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800">
          {icon}
        </span>
                <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
            </div>
            <p className="text-sm text-slate-300 mt-3">{desc}</p>
        </div>
    )
}

function GlassItem({ icon, title, desc }) {
    return (
        <div className="rounded-2xl bg-slate-900/60 shadow-sm p-5 border border-slate-700">
            <div className="flex items-center gap-3">
        <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800">
          {icon}
        </span>
                <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
            </div>
            <p className="text-sm text-slate-300 mt-3">{desc}</p>
        </div>
    )
}
