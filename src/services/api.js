// Cliente fino em cima de fetch com retry via /auth/refresh
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

let accessToken = null; // mantemos em memória; o provider cuida de persistir

export function setAccessToken(token) {
    accessToken = token || null;
}

async function doFetch(path, options = {}, tryRefresh = true) {
    const headers = new Headers(options.headers || {});
    if (!(options.body instanceof FormData)) headers.set('Content-Type', 'application/json');
    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);

    const res = await fetch(`${BASE_URL}${path}`, {
        method: options.method || 'GET',
        credentials: 'include', // necessário p/ cookie httpOnly do refresh
        headers,
        body: options.body instanceof FormData ? options.body : options.body ? JSON.stringify(options.body) : undefined,
    });

    // Se expirar, tenta /auth/refresh e refaz uma vez
    if (res.status === 401 && tryRefresh) {
        const refreshed = await refreshToken();
        if (refreshed) return doFetch(path, options, false);
    }

    // 204 sem body
    if (res.status === 204) return { ok: true };

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const message = data?.message || `Erro ${res.status}`;
        throw new Error(message);
    }
    return data;
}

export const api = {
    get: (p, o) => doFetch(p, { ...o, method: 'GET' }),
    post: (p, body, o) => doFetch(p, { ...o, method: 'POST', body }),
    del: (p, o) => doFetch(p, { ...o, method: 'DELETE' }),
};

export async function refreshToken() {
    try {
        const data = await fetch(`${BASE_URL}/auth/refresh`, {
            method: 'POST',
            credentials: 'include',
        }).then(async (r) => {
            if (!r.ok) return null;
            return r.json();
        });
        if (data?.accessToken) {
            setAccessToken(data.accessToken);
            // opcional: também guardar user se retornado
            return true;
        }
        return false;
    } catch {
        return false;
    }
}
