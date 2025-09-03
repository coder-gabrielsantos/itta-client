export function TextField({ type = 'text', placeholder, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none
                 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
        />
    )
}
