import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Register from './components/register/register.js'
import Login from './components/login/login.js'




function App() {

  const router=createBrowserRouter([
    {path:"/",
   element:<div>hello</div>
    },

  {path:"/register",
   element:<Register/>
   },

  {path:"/login",
   element:<Login/>
   }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
