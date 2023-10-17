import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Root from './Components/Root';
import ErrorPage from './Pages/ErrorPage';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import ShowProduct from './Pages/ShowProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    errorElement : <ErrorPage/>,

    children : [
      {
        path : '/',
        element : <Home/>
        

      },
      {
        path: 'showProduct',
        element: <ShowProduct/>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path : '/add',
        element : <AddProduct/>

      },
      {
        path : '/update',
        element : <UpdateProduct/>

      },
      {
        path : '/register',
        element : <Register/>

      },
      
      {
        path : '/login',
        element : <Login/>

      },
    ]
  },
]);
    

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
