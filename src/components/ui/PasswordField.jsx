import { useState } from 'react'

export function PasswordField({ label, placeholder, value, onChange }) {
    const [show, setShow] = useState(false)
    return (
        <label className="block">
            <span className="block text-sm mb-1 text-gray-700">{label}</span>
            <div className="relative">
                <input
                    type={show ? 'text' : 'password'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm outline-none focus:border-gray-400"
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs"
                >
                    {show ? 'Ocultar' : 'Mostrar'}
                </button>
            </div>
        </label>
    )
}
