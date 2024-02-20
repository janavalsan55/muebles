import React, { useEffect, useState } from 'react'
import { deletefur, getfurAPI, getfurforadmin } from '../Services/allApi'
import Navforadmin from './Navforadmin'
import { BASEURL } from '../Services/baseUrl'

function ProductAdmin() {
  const [allusers,setallusers]=useState([])
  const[response,setresponse]=useState(1)

  useEffect(()=>{
    getallproducts()
  },[response])
  const getallproducts=async()=>{
    const res= await getfurAPI()
    setallusers(res.data)
  }
  const handledeletefur=async(e)=>{
    // alert(e._id)
    await deletefur(e._id)
    setresponse(response+1)
  }
  return (
    <>
    
    <Navforadmin/>
    <div className='w-100 d-flex justify-content-center' style={{height:'100%'}}>
        
    <table className='table text-center m-5 p-5 border shadow '>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Seller Mobile</th>
          <th>Seller Place</th>
          <th>Action</th>
        </tr>
      </thead>
     <tbody className=''>
       {
        allusers.length>0?allusers.map((users)=>(
          <tr className=''>
         <td>{users.pname}</td>
         <td><img src={users.pimage?`${BASEURL}/uploads/${users.pimage}`:"https://bikeadvice.in/wp-content/uploads/2023/11/Royal-Enfield-Himalayan-452-Pic.jpg"} style={{height:'80px',width:'100px'}} alt="No Image" /></td>
         <td>{users.price}</td>
         <td>{users.mobile}</td>
         <td>{users.place}</td>
         <td className='d-flex justify-content-center'>
            <button className='btn btn-outline-danger' onClick={e=>handledeletefur(users)}>Remove</button>
            
         </td>
       </tr>
        )): <h3 className='text-danger text-center'>No Users</h3>
       }
     </tbody>
     </table>
    </div>
    </>
  )
}

export default ProductAdmin