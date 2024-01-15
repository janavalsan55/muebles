import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/allApi'

function Register() {
  const navigate=useNavigate()
  const [userData,setUserData]=useState({
    username:"",email:"",mobile:"",password:"",access:"pending"
  })
const handleregister=async()=>{
  if(!userData.username||!userData.email||!userData.mobile||!userData.password){
    alert("Please fill the form completely")
  }
  else{
    const res=await registerAPI(userData)
    if(res.status===200){
      alert(userData.username + "has successfully registered")
      // setUserData({
      //   username:"",email:"",mobile:"",password:""
      // })
      navigate('/login')

    }
    else{
      alert("Action Failed!! Please Try After Some Time...")
    }
  }
  console.log(userData);
}
  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='bg-light shadow rounded d-flex flex-column' style={{width:'500px',height:'500px'}}>
          <div><h2 className='fw-bolder text-center mt-4'>Sign Up</h2></div>
          <div className='ms-5 me-5'><input type="text" placeholder='Username' className='form-control mt-5' value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})}/></div>
          <div className='ms-5 me-5'><input type="text" placeholder='Email' className='form-control mt-3' value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}/></div>
          <div className='ms-5 me-5'><input type="text" placeholder='Mobile Number' className='form-control mt-3' value={userData.mobile} onChange={e=>setUserData({...userData,mobile:e.target.value})} /></div>
          <div className='ms-5 me-5'><input type="password" placeholder='Password' className='form-control mt-3' value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})}/></div>
          <div className='text-center'><button className='btn btn-outline-success mt-4 ' style={{borderRadius:'16px',width:'100px'}} onClick={handleregister}>Register</button></div>
          <div className='mt-4 d-flex justify-content-center'>
            <div><p>Already have an account</p></div>
            <div className='ms-3'><Link to={'/login'} className='fw-bolder'>Login</Link></div>
          </div>

        </div>
    </div>
  )
}

export default Register