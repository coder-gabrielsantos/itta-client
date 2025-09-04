import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname, search, hash } = useLocation()

    useEffect(() => {
        // se houver âncora (#), deixe o navegador ir até ela.
        if (hash) return
        // reset para o topo ao trocar de rota (pathname ou query)
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [pathname, search, hash])

    return null
}
