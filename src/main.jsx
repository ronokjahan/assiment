import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mains from './Componante/Mains.jsx';
import Navbar from './Componante/Navbar.jsx';

import Footer from './Componante/Footer.jsx';
import Home from './Componante/Home/Home.jsx';
import Login from './Componante/Login.jsx';
import Regstion from './Componante/Regstion.jsx';
import Authprovider from './Componante/Home/Authprovider.jsx';
import Chef from './Componante/Chef.jsx';
import Chefdeatils from './Componante/Chefdeatils.jsx';
import Chefs from './Chefs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mains></Mains>,
    children:[{
      path:'/',
      element:<Home></Home>
    },{
      path:'/login',
      element:<Login></Login>
    },{
      path:'/regstion',
      element:<Regstion></Regstion>
    },{
      path:'/chefs/:id',
      element:<Chefs></Chefs>,
      loader:({params})=>fetch(`http://localhost:3000/chef/${params.id}`)
      
    }
  ]
  },

  // {
  //   path:'/chefs',
  //   element:<Chefdeatils></Chefdeatils>,
  //   children:[
  //    {
  //     path:'chefs/:id',
  //     element:<Chefs></Chefs>
  //    }
    
  //   ]
    
  // }
 
]




);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authprovider>
  <RouterProvider router={router} />
 </Authprovider>
 </React.StrictMode>,
)
