import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ProtectedRoutes from "./ProtectedRoutes";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>

                {/* Protected Routes */}
                <Route element={<ProtectedRoutes />} >
                    <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
                </Route>

                {/* 404 Not Found */}
                <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
