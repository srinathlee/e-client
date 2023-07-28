import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/home/home.js'
import Register from './components/register/register.js'
import Login from './components/login/login.js'
import Products from './components/products/products.js'
import ProtectedRoute from './middlewares/auth.js'
import Pagenotfound from './components/pagenotfound/index.js'




function App() {

  const router=createBrowserRouter([
    {path:"/",
   element:<ProtectedRoute><Home/></ProtectedRoute>
    },

  {path:"/register",
   element: <Register/>
   },

  {path:"/login",
   element:<Login/>
   },
   {
    path:"/products",
    element:<ProtectedRoute><Products/></ProtectedRoute>
   },
   {
    path:"*",
    element:<Pagenotfound/>
   }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
