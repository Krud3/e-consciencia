import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthComponent from './pages/(auth)/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthComponent />
  </StrictMode>,
)
