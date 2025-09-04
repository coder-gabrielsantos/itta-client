export function OAuthButton({ provider = 'Google', onClick, className = '' }) {
    const label = provider === 'Google' ? 'Entrar com Google' : `Entrar com ${provider}`

    return (
        <button
            type="button"
            onClick={onClick}
            className={
                "w-full inline-flex items-center justify-center gap-2 rounded-lg " +
                "border border-slate-700 bg-slate-800 text-slate-100 " +
                "hover:bg-slate-700 transition px-4 py-3 " + className
            }
        >
            {/* opcional: troque o src pelo seu ícone */}
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" className="h-5 w-5"/>
            <span className="text-sm font-medium">{label}</span>
        </button>
    )
}
