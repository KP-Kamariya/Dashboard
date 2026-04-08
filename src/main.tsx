import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import Dashboard from './components/Dashboard'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inventory from './components/Inventory';
import All_Products from './components/All_Products';
import Report from './components/Report';
import Error from './components/Error';
import Docs from './components/Docs';
import Login from './components/Login';
import Signup from './components/Signup';


let allrouter = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path: 'inventory',
    element: <Inventory />
  },
  {
    path: 'allproduct',
    element: <All_Products />
  },
  {
    path: 'reports',
    element: <Report />
  },
  {
    path: 'error',
    element: <Error />
  },
  {
    path: 'docs',
    element: <Docs />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <Signup />
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={allrouter} />
  </StrictMode>,
)
