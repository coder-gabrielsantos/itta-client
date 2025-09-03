import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export function PasswordField({ placeholder = 'Digite sua senha', value, onChange }) {
    const [show, setShow] = useState(false)
    return (
        <div className="relative">
            <input
                type={show ? 'text' : 'password'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-3 pr-10 text-sm outline-none
                   focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
            />
            <button
                type="button"
                onClick={() => setShow(!show)}
                aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
                {show ? (
                    <EyeSlashIcon className="h-5 w-5" />
                ) : (
                    <EyeIcon className="h-5 w-5" />
                )}
            </button>
        </div>
    )
}
