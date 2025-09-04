export function Checkbox({ id, label, className = '', ...props }) {
    return (
        <label htmlFor={id} className={`flex items-center gap-2 text-slate-300 text-sm cursor-pointer ${className}`}>
            <input
                id={id}
                type="checkbox"
                className="h-4 w-4 rounded border-slate-700 bg-slate-900/60 accent-blue-500 focus:ring-blue-500"
                {...props}
            />
            {label}
        </label>
    )
}
