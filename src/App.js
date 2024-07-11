import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Footer from './components/Footer'
import Delete from './components/Deleteuser'
import Createitem from './components/Createitem'
import Allitems from './components/Allitems'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'element={<Home/>}/>
     <Route path='/Register' element={<Register/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Delete' element={<Delete/>}/>
     <Route path='/Create' element={<Createitem/>}/>
     <Route path='/Menu' element={<Allitems/>}/>
    </Routes> 
    <Footer/>
    </BrowserRouter> 
  )
}

export default App