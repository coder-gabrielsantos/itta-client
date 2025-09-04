import { useState } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

export function PasswordField({
                                  hint,
                                  error,
                                  size = 'md',
                                  className = '',
                                  inputClassName = '',
                                  ...props
                              }) {
    const [visible, setVisible] = useState(false)
    const sizes = {
        sm: 'h-9 text-sm pl-10 pr-10',
        md: 'h-11 text-base pl-11 pr-11',
        lg: 'h-12 text-base pl-12 pr-12'
    }

    return (
        <div className={`w-full ${className}`}>
            <div className="relative group">
                {/* ícone lock */}
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Lock
              className={`h-5 w-5 transition ${
                  error ? 'text-rose-400' : 'text-slate-400 group-focus-within:text-indigo-400'
              }`}
          />
        </span>

                <input
                    type={visible ? 'text' : 'password'}
                    placeholder="Senha"   // só placeholder agora
                    className={`
            w-full rounded-xl bg-slate-900/60 border outline-none transition
            border-slate-700 text-slate-100 placeholder:text-slate-400
            focus:border-transparent focus:ring-2 focus:ring-indigo-500/40
            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
            ${sizes[size]}
            ${error ? 'border-rose-500/60 focus:ring-rose-500/40' : ''}
            ${inputClassName}
          `}
                    {...props}
                />

                {/* botão olho */}
                <button
                    type="button"
                    onClick={() => setVisible((v) => !v)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                    aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
                >
                    {visible ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
                </button>
            </div>

            {error ? (
                <p className="mt-1 text-xs text-rose-400">{error}</p>
            ) : hint ? (
                <p className="mt-1 text-xs text-slate-400">{hint}</p>
            ) : null}
        </div>
    )
}
