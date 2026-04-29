import { Outlet, Navigate } from 'react-router-dom';
export default function ProtectedRoutes() {
    const isAuthenticated: boolean = false
    return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
