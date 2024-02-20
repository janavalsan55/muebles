import React, { useEffect, useState } from 'react'
import Navforadmin from './Navforadmin'
import { deleteuser, edituser, getusers } from '../Services/allApi'


function Userforadmin() {
    const [allusers,setallusers]=useState([])
    const[response,setresponse]=useState(1)
    useEffect(()=>{
        getallusers()
    },[response])
    const getallusers=async()=>{
        const res =await getusers()
        console.log(res);
        setallusers(res.data)
    }
    const handledeleteuser=async(e)=>{
        await deleteuser(e._id)
        setresponse(response+1)
        // console.log(e._id);
    }
    const handlepermission=async(e)=>{
      var userData=({
        username:e.username,email:e.email,mobile:e.mobile,password:e.password,access:"approved"
      })
      // username:"",email:"",mobile:"",password:"",access:"pending"
      const id=e._id
      if(userData.username&&userData.email&&userData.mobile&&userData.password){
      const res = await edituser(id,userData)}
      setresponse(response+1)
      // console.log(userData);
    }
    
  return (
    <>
    <Navforadmin/>
    <div className='w-100 d-flex justify-content-center' style={{height:'100%'}}>
        
    <table className='table text-center m-5 p-5 border shadow '>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Access</th>
          <th>Action</th>
        </tr>
      </thead>
     <tbody className=''>
       {
        allusers.length>0?allusers.map((users)=>(
          <tr className=''>
         <td>{users.username}</td>
         <td>{users.mobile}</td>
         <td>{users.email}</td>
         <td>{users.access}</td>
         <td className='d-flex justify-content-center'>
            <button className='btn btn-outline-danger' onClick={e=>handledeleteuser(users)}>Block User</button>
            {users.access=="pending"&&<button className='btn btn-outline-success ms-2' onClick={e=>handlepermission(users)}>Approve</button>}
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

export default Userforadmin