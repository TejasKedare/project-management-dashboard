import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes/AppRoutes.tsx'
import Header from './app/layout/Header.tsx'
import Footer from './app/layout/Footer.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Header />
      <AppRoutes />
      <Footer />
    </Provider>
  </StrictMode>,
)
