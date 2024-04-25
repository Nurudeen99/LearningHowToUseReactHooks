import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './components/contextPage/Context.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './components/aboutPage/AboutPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/aboutPage",
    element: <AboutPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
        <RouterProvider router={router} />
    </Context>
   
  </React.StrictMode>,
)
