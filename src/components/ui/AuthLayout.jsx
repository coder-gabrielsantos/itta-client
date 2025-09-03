export function AuthLayout({ children }) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Coluna da esquerda com a imagem */}
            <div className="hidden lg:block">
                <img
                    src="/img/login-hero.png"
                    alt="Imagem de fundo"
                    className="h-screen w-full object-cover"
                />
            </div>

            {/* Coluna da direita com o conteúdo */}
            <div className="flex items-center justify-center p-6 bg-gray-50">
                <div className="w-full max-w-md">{children}</div>
            </div>
        </div>
    )
}
