import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Root from './Components/Layout/Root.jsx';
import AuthProvider from './Components/Context/AuthContext/AuthProvider.jsx';
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {
      index:true,
      path:"/",
      Component:Home
    },
   
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </StrictMode>,
)
