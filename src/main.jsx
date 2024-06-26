import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurJeans from './pages/OurJeans.jsx'
import Contact from './pages/Contact.jsx'
import ShoppingBag from './components/PagesNav/ShoppingBag.jsx'
import Favorites from './components/PagesNav/Favorites.jsx'
import UserLog from './components/PagesNav/UserLog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}> 
<Route index element={<Home />}/>
<Route path="/aboutUs"element={<AboutUs />}/>
<Route path="/ourJeans"element={<OurJeans />}/>
<Route path="/contact"element={<Contact />}/>
<Route path="/shoppingBag" element={<ShoppingBag />} /> 
<Route path="/favorites" element={<Favorites />} /> 
<Route path="/userLog" element={<UserLog/>} /> 

</Route>
))





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router = {router}/>
  </React.StrictMode>,
)
