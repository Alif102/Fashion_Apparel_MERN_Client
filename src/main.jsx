import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home';
import Root from './Components/Root';
import ShowProduct from './Pages/ShowProduct';
import AddProducts from './Pages/AddProducts';
import MyCart from './Pages/MyCart';
import ProductDetails from './Pages/ProductDetails';
import Register from './Components/Register';
import Login from './Components/Login';
import AuthProvider from './Provider/AuthProvider';
import IndividualProduct from './Pages/IndividualProduct';
import ErrorPage from './Pages/ErrorPage';
// import Update from './Pages/Update';
import UpdateProducts from './Pages/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    errorElement : <ErrorPage/>,

    children : [
      {
        path : '/',
        element : <Home/>,


      },
    
     
      {
        path: '/showProduct',
        element: <ShowProduct/>,
        loader: () => fetch('https://coffe-server-backend.vercel.app/product')
      },
      {
        path: '/details/:brand',
        element : <ProductDetails/>,
        loader: ({params}) => fetch(`https://coffe-server-backend.vercel.app/product/${params.brand}`)
      },
     
      {
        path: '/detail/:_id',
        element: <IndividualProduct></IndividualProduct>,
        loader: ({params}) => fetch(`https://coffe-server-backend.vercel.app/products/${params._id}`)
      
      },
      {
        path: '/updateProduct/:_id',
        element: <UpdateProducts/>,
        loader: ({params}) => fetch(`https://coffe-server-backend.vercel.app/products/${params._id}`)
      
      },
    

      
      {
        path: '/myCart/:_id',
        element: <MyCart/> ,
        loader: ({params}) => fetch(`https://coffe-server-backend.vercel.app/products/${params._id}`)
      },
     
      {
        path : '/add-products',
        element : <AddProducts/>
        

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
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
