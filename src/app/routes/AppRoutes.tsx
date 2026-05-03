import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ProtectedRoutes from "./ProtectedRoutes";
import { lazy, Suspense } from "react";

export default function AppRoutes() {

    const Counter = lazy(() => import('@/features/Counter/Counter'))

    return (
        <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App />}></Route>

                {/* Protected Routes */}
                <Route element={<ProtectedRoutes />} >
                    <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
                </Route>

                <Route path="/counter" element={<Counter/>}></Route>

                {/* 404 Not Found */}
                <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
        </Suspense>
        </BrowserRouter>
    )
}
