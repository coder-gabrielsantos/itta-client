import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Divider } from '../components/ui/Divider'
import { Mic, Keyboard, ShieldCheck, Timer, BadgeCheck } from 'lucide-react'

export default function InterviewIntro() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-gray-200 p-8 sm:p-12 space-y-10">
                {/* Cabeçalho */}
                <header className="text-center space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Simulador de Entrevistas
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        Treine respostas com perguntas geradas por IA e receba um feedback estruturado no final.
                    </p>
                </header>

                {/* Como funciona */}
                <section className="grid gap-6 sm:grid-cols-3">
                    <InfoCard
                        icon={<Timer className="h-5 w-5 text-blue-600" />}
                        title="Duração"
                        desc="~10–15 min (modo curto). Você pode pausar a qualquer momento."
                    />
                    <InfoCard
                        icon={<BadgeCheck className="h-5 w-5 text-indigo-600" />}
                        title="Avaliação"
                        desc="Clareza, profundidade técnica, precisão e comunicação."
                    />
                    <InfoCard
                        icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
                        title="Privacidade"
                        desc="Suas respostas são usadas apenas para gerar feedback e histórico."
                    />
                </section>

                <Divider>O que esperar</Divider>

                {/* Expectativas */}
                <section className="grid gap-6 sm:grid-cols-2">
                    <GlassItem
                        icon={<Keyboard className="h-5 w-5 text-blue-600" />}
                        title="Formato"
                        desc="Nesta primeira versão, as respostas serão em texto. Em breve, modo voz."
                    />
                    <GlassItem
                        icon={<Mic className="h-5 w-5 text-indigo-600" />}
                        title="Perguntas"
                        desc="Por stack (ex.: Backend/Frontend/Data) ou com base no seu currículo."
                    />
                </section>

                {/* Dicas rápidas */}
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold">Dicas rápidas</h2>
                    <ul className="text-sm text-gray-700 grid gap-2 list-disc pl-5">
                        <li>Use a técnica STAR (Situação, Tarefa, Ação, Resultado) quando fizer sentido.</li>
                        <li>Explique decisões técnicas (trade-offs) e cite complexidade quando aplicável.</li>
                        <li>Mantenha respostas objetivas; detalhe apenas o essencial para demonstrar domínio.</li>
                    </ul>
                </section>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4">
                    <p className="text-xs text-gray-500 max-w-sm">
                        Ao iniciar, a IA fará perguntas sequenciais e ao término você receberá um relatório com pontuações e sugestões.
                    </p>
                    <Link to="/interviews/session">
                        <Button>Iniciar entrevista</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function InfoCard({ icon, title, desc }) {
    return (
        <div className="rounded-2xl bg-white shadow-sm p-5 border border-gray-200 hover:border-blue-200 transition">
            <div className="flex items-center gap-3">
        <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50">
          {icon}
        </span>
                <h3 className="text-sm font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 mt-3">{desc}</p>
        </div>
    )
}

function GlassItem({ icon, title, desc }) {
    return (
        <div className="rounded-2xl bg-white shadow-sm p-5 border border-gray-200 hover:border-indigo-200 transition">
            <div className="flex items-center gap-3">
        <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-indigo-50">
          {icon}
        </span>
                <h3 className="text-sm font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 mt-3">{desc}</p>
        </div>
    )
}
