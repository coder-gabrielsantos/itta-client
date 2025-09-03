export function TextField({ label, type = 'text', placeholder, value, onChange }) {
    return (
        <label className="block">
            <span className="block text-sm mb-1 text-gray-700">{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            />
        </label>
    )
}
