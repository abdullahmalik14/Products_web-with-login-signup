
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ProductDetails from '../pages/ProductDetails'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Routers = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default Routers