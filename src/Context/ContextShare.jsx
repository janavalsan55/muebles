import React, { createContext, useState } from 'react'
import Addproducts from '../Pages/Addproducts'
import Viewdetails from '../Pages/Viewdetails'

export const addcontext = createContext()
function ContextShare({children}) {
    const [addthings,setaddthings]=useState()
  return (
    <addcontext.Provider value={{addthings,setaddthings}}>
        {children}
    </addcontext.Provider>
  )
}

export default ContextShare