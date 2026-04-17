import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './components/Dashboard'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inventory from './components/Inventory';
import All_Products from './components/All_Products';
import Report from './components/Report';
import Error from './components/Error';
import Docs from './components/Docs';
import Signup from './components/Signup';
import Login from './components/Login'
import Layout from './commonfiles/Layout'


let allrouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,        
    children: [                 
      {
        index: true,
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
        path: 'docs',
        element: <Docs />
      },
    ]
  },
  {
    path: '*',
    element: <Error />
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
