import React from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import DashBoard from './components/DashBoard';
import Home  from './components/Home';
import About from  './components/About'
import Navbar from './components/Navbar';
import UseParams from './components/UseParams';
import Courses from './components/Courses';
import Mock_Test from './components/Mock_Test';
import Reports from './components/Reports';
const router = createBrowserRouter(
[
  {path:"/",
    element:<div>
       <Navbar/>
       <Home/>
    </div>
  },
  {path:"/about",
    element:<div>
       <Navbar/>
       <About/>
    </div>
  },
  {path:"/dashboard",
    element:<div>
       <Navbar/>
       <DashBoard/>
    </div>,
    children:[
      {
        path:"courses",
        element:<Courses/>
      },
      {
        path:"mock-tests",
        element:<Mock_Test/>
      },
      {
        path:"reports",
        element:<Reports/>
      },

    ]
  },

  {
    path:"/products/:id",
    element: <div>
      <Navbar/>
      <UseParams/>
    </div>
  }
]
);
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App