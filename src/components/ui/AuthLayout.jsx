export function AuthLayout({ children }) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-950 text-slate-100">
            {/* Coluna esquerda: imagem só em telas grandes */}
            <div className="relative hidden lg:block">
                <img
                    src="/img/login-hero.png"
                    alt="Imagem de fundo"
                    className="h-full w-full object-cover"
                />
                {/* overlay para manter coerência com dark */}
                <div className="absolute inset-0 bg-slate-950/40"/>
            </div>

            {/* Coluna direita: conteúdo (sempre visível) */}
            <div className="flex items-center justify-center p-6">
                <div className="w-full max-w-md">{children}</div>
            </div>
        </div>
    )
}

export default AuthLayout
