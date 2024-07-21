import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import Dashboard from './routes/dashboard.tsx'
import Login from './routes/login.tsx'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Signup from './routes/signup.tsx';
import ProtecterRout from './routes/protectedRout.tsx'
import Dashboard from './routes/dashboard.tsx';
import { AuthProvider } from './auth/authProvider.tsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Login />,
  },

  {
    path : "/signup",
    element: <Signup/>,
  },

  {
    path : "/",
    element: <ProtecterRout/>,
    children :[
      {
        path : "/dashboard",
        element : <Dashboard />
      }
    ]
  },


  
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
)
