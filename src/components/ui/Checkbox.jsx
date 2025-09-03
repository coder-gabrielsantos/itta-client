export function Checkbox({ label, checked, onChange, id }) {
    return (
        <div className="flex items-center gap-2">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor={id} className="text-sm text-gray-700">{label}</label>
        </div>
    )
}
