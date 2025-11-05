import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import Contact from "./components/Contact.jsx"
import Blog from "./components/Blog.jsx"

const router = createBrowserRouter([
  {path:"/" , element : <App/>, children : [
    {path: "/", element: <Home/>},
    {path : "/about", element: <About/>},
    {path : "/contact", element: <Contact />},
    {path : "/services", element: <Services />},
    {path : "/blog", element: <Blog />},
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
