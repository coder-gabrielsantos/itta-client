import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { api, setAccessToken, refreshToken } from '../services/api'

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('accessToken') || null);
    const [loading, setLoading] = useState(true);

    // A cada mudança no token: atualiza cliente + persiste
    useEffect(() => {
        setAccessToken(token);
        if (token) localStorage.setItem('accessToken', token);
        else localStorage.removeItem('accessToken');
    }, [token]);

    // Ao montar, tenta refresh (se houver cookie httpOnly)
    useEffect(() => {
        (async () => {
            try {
                if (!token) {
                    const ok = await refreshToken();
                    if (ok) {
                        // refreshToken já seta o access token no cliente; pegamos do storage depois no primeiro request
                        const profile = await api.get('/health'); // ping protegido opcional
                        setToken(localStorage.getItem('accessToken') || null); // caso você prefira setar aqui manualmente, pode adaptar
                    }
                }
            } finally {
                setLoading(false);
            }
        })();
    }, []); // uma vez

    async function login({ email, password }) {
        const data = await api.post('/auth/login', { email, password });
        // PDF: retorna { user, accessToken } e seta refreshToken em cookie httpOnly :contentReference[oaicite:1]{index=1}
        setUser(data.user || null);
        setToken(data.accessToken);
        return data.user;
    }

    async function register({ name, email, password }) {
        const data = await api.post('/auth/register', { name, email, password });
        setUser(data.user || null);
        setToken(data.accessToken);
        return data.user;
    }

    async function logout() {
        try {
            await api.post('/auth/logout'); // 204 limpa cookie no servidor :contentReference[oaicite:2]{index=2}
        } catch {
        }
        setUser(null);
        setToken(null);
    }

    const value = useMemo(() => ({
        user, token, loading, login, register, logout,
        isAuthenticated: !!token,
    }), [user, token, loading]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
    return ctx;
}
