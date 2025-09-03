import { Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import AuthLayoutRoute from '../layouts/AuthLayoutRoute'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import ResumeUpload from '../pages/ResumeUpload'
import InterviewIntro from '../pages/InterviewIntro'

function PrivateRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem('token')
    return isAuthenticated ? children : <Navigate to="/login" replace/>
}

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayoutRoute/>}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Route>

            <Route element={<SiteLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/resumes" element={<ResumeUpload />} />
                <Route path="/interviews" element={<InterviewIntro />} />
                <Route path="/interviews/session" element={<div className="p-6">Sessão da entrevista (em breve)</div>} />

                {/* exemplo de rota protegida */}
                <Route path="/dashboard" element={<PrivateRoute>
                    <div className="p-6">Dashboard (placeholder)</div>
                </PrivateRoute>}/>
            </Route>

            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    )
}
