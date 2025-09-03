export function OAuthButton({ provider = 'Google', onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50"
        >
      <span className="inline-flex items-center gap-2 justify-center w-full">
        <span>🔑</span>
        <span>Entrar com {provider}</span>
      </span>
        </button>
    )
}
