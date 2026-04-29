import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes/AppRoutes.tsx'
import Header from './app/layout/Header.tsx'
import Footer from './app/layout/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <AppRoutes />
    <Footer />
  </StrictMode>,
)
