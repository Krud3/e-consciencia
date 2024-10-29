import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthComponent from './pages/(auth)/login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SignUpForm from './pages/(auth)/sign-up'
import World from './pages/World'
<<<<<<< HEAD
import Home from './pages/Home'

=======
import Acidification from './pages/Acidification/Acidification';
import { Toaster } from "@/components/ui/sonner"
import BlockWorldMain from './pages/contamination/BlockWorldMain'
>>>>>>> c441910da81b3792916ecaed21787ae09a679eef

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
<<<<<<< HEAD
    path: "/home", element: <Home/>,
  },
=======
    path: "/acidification", element:<Acidification/>,
  },
  {
    path: "/contamination", element: <BlockWorldMain/>,
  }
>>>>>>> c441910da81b3792916ecaed21787ae09a679eef
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
    <Toaster />cd 
  </StrictMode>,
)
