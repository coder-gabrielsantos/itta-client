export function OAuthButton({ provider = 'Google', onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm
                 flex items-center justify-center gap-2
                 hover:bg-gray-50 active:bg-gray-100
                 transition-colors duration-200
                 cursor-pointer"
        >
            <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="h-5 w-5"
            />
            <span>Entrar com {provider}</span>
        </button>
    )
}
