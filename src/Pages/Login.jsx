import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI } from '../Services/allApi';
import './home.css';

function Login() {
  const navigate=useNavigate()
  const[userData,setUserData]=useState({
    email:"",password:""
  })
  const handlelogin=async()=>{
    console.log(userData);
    if(!userData.email||!userData.password){
      alert("Please fill the form completely")
    }
    else{
        if(userData.email=="admin@gmail.com"&&userData.password=="admin"){
           navigate('/adminusers')
        }
        else{
            const res =await loginAPI(userData)
            if(res.status===200){
                if(res.data.access=="pending"){
                    alert('You dont have permission to login!! Contact admin...')
                }
                else{
                    sessionStorage.setItem("email",res.data.email)
                    sessionStorage.setItem("userId",res.data._id)
                    navigate('/home')
                    setUserData({
                      email:"",password:""
                    })
                }
              
            }
            else{
              alert(res.response.data)
            }
        }
     
    }
  }
  return (

    <div className='loginbg'>
    <div className='   w-100 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='loginbg1 bg-light shadow rounded d-flex flex-column' style={{width:'500px',height:'500px'}}>
          <div><h2 className='fw-bolder text-center mt-4 text-dark'>Sign In</h2></div>
          <div className='ms-5 me-5'><input type="text" placeholder='Email' className='form-control mt-5' value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}/></div>
          <div className='ms-5 me-5'><input type="password" placeholder='Password' className='form-control mt-4 ' value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} /></div>
          <div className='text-center'><button className='btn btn-outline-success mt-5 ' style={{borderRadius:'16px',width:'100px'}} onClick={handlelogin}>Login</button></div>
          <div className='mt-5 d-flex justify-content-center'>
            <div><p className='text-dark'>Don't have an account</p></div>
            <div className='ms-3'><Link to={'/register'} className='fw-bolder'>Register</Link></div>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Login