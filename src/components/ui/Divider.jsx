export function Divider({ children }) {
    return (
        <div className="relative my-8 flex items-center">
            {/* linha esquerda */}
            <div className="flex-grow border-t border-slate-700" />

            {children && (
                <span className="mx-4 text-sm font-medium text-slate-200">
          {children}
        </span>
            )}

            {/* linha direita */}
            <div className="flex-grow border-t border-slate-700" />
        </div>
    )
}
