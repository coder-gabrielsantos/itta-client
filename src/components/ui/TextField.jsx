import { Mail } from 'lucide-react'

export function TextField({
                              label,
                              hint,
                              error,
                              leftIcon: LeftIcon = Mail,
                              rightSlot,
                              size = 'md',
                              className = '',
                              inputClassName = '',
                              disabled,
                              ...props
                          }) {
    const sizes = {
        sm: 'h-9 text-sm pl-10 pr-10',
        md: 'h-11 text-base pl-11 pr-11',
        lg: 'h-12 text-base pl-12 pr-12'
    }

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="mb-1 block text-sm font-medium text-slate-300">
                    {label}
                </label>
            )}

            <div className="relative group">
                {LeftIcon && (
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <LeftIcon
                className={`h-5 w-5 transition ${
                    error ? 'text-rose-400' : 'text-slate-400 group-focus-within:text-blue-400'
                }`}
            />
          </span>
                )}

                <input
                    disabled={disabled}
                    className={`
            w-full rounded-xl bg-slate-900/60 border outline-none transition
            border-slate-700 text-slate-100 placeholder:text-slate-400
            focus:border-transparent focus:ring-2 focus:ring-blue-500/40
            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
            ${sizes[size]}
            ${error ? 'border-rose-500/60 focus:ring-rose-500/40' : ''}
            ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
            ${inputClassName}
          `}
                    {...props}
                />

                {rightSlot && (
                    <span className="absolute inset-y-0 right-0 pr-2 flex items-center">
            {rightSlot}
          </span>
                )}
            </div>

            {error ? (
                <p className="mt-1 text-xs text-rose-400">{error}</p>
            ) : hint ? (
                <p className="mt-1 text-xs text-slate-400">{hint}</p>
            ) : null}
        </div>
    )
}
