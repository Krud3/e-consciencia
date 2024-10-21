import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthComponent from './pages/(auth)/login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SignUpForm from './pages/(auth)/sign-up'
import World from './pages/World'
import Home from './pages/Home'


const router = createBrowserRouter([
  {
    path: "/", element: <AuthComponent/>,
  },
  {
    path: "/signup", element: <SignUpForm/>,
  },
  {
    path: "/signin", element: <AuthComponent/>,
  },
  {
    path: "/econsciencia", element: <World/>,
  },
  {
    path: "/home", element: <Home/>,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
