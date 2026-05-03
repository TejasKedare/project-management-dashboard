import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes/AppRoutes.tsx'
import Header from './app/layout/Header.tsx'
import Footer from './app/layout/Footer.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <QueryClientProvider  client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
    </QueryClientProvider>
    </Provider>
  </StrictMode>,
)

