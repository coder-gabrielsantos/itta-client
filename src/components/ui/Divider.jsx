export function Divider({ children }) {
    return (
        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"/>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-2 text-s text-gray-500">{children}</span>
            </div>
        </div>
    )
}
