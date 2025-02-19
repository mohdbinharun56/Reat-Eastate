import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router'
import AuthProvider from './sharedComponents/Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
