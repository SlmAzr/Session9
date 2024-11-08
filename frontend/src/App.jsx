import { useState } from 'react'
import{createBrowserRouter, RouterProvider, Outlet, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';

function App() {
// const isAuthenticated = ()=> !!localStorage.getItem('token');

// const PrivateRoute=({children})=>{
//   return isAuthenticated ? children : <Navigate to="/login"/>;
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ],
  }
])

  return (
    <RouterProvider router={router}/>
    

  )
}

export default App
