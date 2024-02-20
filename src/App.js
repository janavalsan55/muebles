import React from 'react'
import Navbars from './Components/Navbars'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Addproducts from './Pages/Addproducts'
import Viewdetails from './Pages/Viewdetails'
import Adminhome from './Admin/Adminhome'
import Userforadmin from './Admin/Userforadmin'
import ProductAdmin from './Admin/ProductAdmin'

function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      {/* <Route path='/' element={<Navbars/>}/> */}
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/add' element={<Addproducts/>}/>
      <Route path='/viewdetails' element={<Viewdetails/>}/>
      <Route path='/adminhome' element={<Adminhome/>}/>
      <Route path='/adminusers' element={<Userforadmin/>}/>
      <Route path='/adminproducts' element={<ProductAdmin/>}/>
    </Routes>
    {/* <Navbars/> */}
    </>
  )
}

export default App