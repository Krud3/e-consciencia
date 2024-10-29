import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthComponent from './pages/(auth)/login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SignUpForm from './pages/(auth)/sign-up'
import World from './pages/World'

import Acidification from './pages/Acidification/Acidification';
import { Toaster } from "@/components/ui/sonner"
import BlockWorldMain from './pages/contamination/BlockWorldMain'
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
    path: "/econsciencia", element: <Home/>,
  },
  {
    path: "/acidification", element:<Acidification/>,
  },
  {
    path: "/contamination", element: <BlockWorldMain/>,
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
    <Toaster /> 
  </StrictMode>,
)
