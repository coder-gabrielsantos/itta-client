export function Button({ children, className = '', ...props }) {
    return (
        <button
            className={
                "w-full rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white " +
                "hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 " +
                "disabled:opacity-60 cursor-pointer " +
                className
            }
            {...props}
        >
            {children}
        </button>
    )
}
