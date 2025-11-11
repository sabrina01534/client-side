import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Root from './Components/Layout/Root.jsx';
import AuthProvider from './Components/Context/AuthContext/AuthProvider.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import AddList from './Components/Pages/AddList.jsx';
import ListDetails from './Components/Pages/ListDetails.jsx';
import MyList from './Components/Pages/MyList.jsx';
import MyOrder from './Components/Pages/MyOrder.jsx';
import PetSupplies from './Components/Pets/PetSupplies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {
      index:true,
      loader:()=>fetch('Data.json'),
      path:"/",
      Component:Home
    },
   {
    path:"/login",
    Component:Login
   },
   {
    path:"/register",
    Component:Register
   },
   {
    path:'/pets',
    loader:()=>fetch('Data.json'),
    Component:PetSupplies
   },
   {
    path:"/:id",
    element:<PrivateRoutes>
    <AddList></AddList>
    </PrivateRoutes>
   },
   {
    path:"/pages",
    loader:()=>fetch('MoreData.json'),
    element:<PrivateRoutes>
      <ListDetails></ListDetails>
    </PrivateRoutes>
   },
   {
path:"/pages",
    element:<PrivateRoutes>
      <MyList></MyList>
    </PrivateRoutes>
   },
   {
path:"/pages",
    element:<PrivateRoutes>
     <MyOrder></MyOrder>
    </PrivateRoutes>
   },
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </StrictMode>,
)
