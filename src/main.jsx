import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import App from './App'
import SignUp from './components/SignUp'

const router = createBrowserRouter([
  {
    path:'/',
    element: <SignUp/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/home',
    element: <App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
