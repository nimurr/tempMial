import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Inbox from './Pages/Inbox.jsx';
import Faq from './Pages/Faq.jsx'; 
import Feedback from './Pages/Feebdack.jsx';
import Contact from './Pages/Contacts.jsx';
import Privacy from './Pages/Privacey';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/', 
        element:<Inbox></Inbox>
      },
      {
        path:'/faq', 
        element:<Faq></Faq>
      },
      {
        path:'/privacy', 
        element:<Privacy></Privacy>
      },
      {
        path:'/feedback', 
        element:<Feedback></Feedback>
      },
      {
        path:'/contact', 
        element:<Contact></Contact>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
