import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './nav.css'
function Navbars() {
    // const navigate=useNavigate()
    const[isopen,setisopen]=useState(false)
    const[islogged,setlogged]=useState(false)
    const handleopenmenu=()=>{
        setisopen(true)
    }
    useEffect(()=>{
        if(sessionStorage.getItem("email")){
            setlogged(true)
        }
    })
   
    const hanldelogout=()=>{
        sessionStorage.removeItem("email")
        sessionStorage.removeItem("userId")
        setlogged(false)
    }
    const navigate=useNavigate()
    const handleaddproduct=()=>{
        var emaill=sessionStorage.getItem("email")
        if(emaill){
            // alert(emaill)
            navigate('/add')
        }
        else{
           
            alert("Please Login to Add Products")
            navigate('/login')
        }
    }
  return (
    <>
    <div className='d-flex '>
        <div>
           <Link to={'/'}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16TBTOeN53HMOh7pQcPIE68C4xzBcX41CXg&usqp=CAU" alt="" className='ms-5 mt-2' style={{width:'80px',height:'60px'}} /></Link>
        </div>

        <div className='navfullscreen mt-4 justify-content-center  w-100 fw-bolder' >
            <div className='me-5 '><Link to={"/home"} className='navitem'>Home</Link></div>
            <div className='me-5 ms-3'><p onClick={handleaddproduct} className='navitem addto'>Add Products</p></div>
            <div className='me-5 ms-3'>{!islogged?<Link to={"/login"} className='navitem'>Login</Link>
            :
            <Link className='navitem' onClick={hanldelogout}>Logout</Link>
            }</div>
            <div className='ms-3'><a href='wa.me/919447499116' target='_blank' className='navitem'>Contact</a></div>
        </div>

        <div className='smallscreenicon me-5 mt-4'>
           { !isopen?
           <button className='btn' onClick={handleopenmenu}><i className="fa-solid fa-bars fa-xl"></i></button>
           :
            <button className='btn' onClick={e=>setisopen(false)}><i className="fa-solid fa-xmark fa-xl"></i></button>}

        </div>

    </div>

    {isopen&&<div className='menusamll bg-light shadow ' style={{width:'200px',height:'800px'}}>
       <div className='mt-5 ms-4'><Link to={"/"} className='navitem'>Home</Link></div>
       <div className='mt-5 ms-4'><p onClick={handleaddproduct} className='navitem addto'>Add Products</p></div>
       <div className='mt-5 ms-4'>{!islogged?<Link to={"/login"} className='navitem'>Login</Link>
       :
       <Link  className='navitem' onClick={hanldelogout}>Logout</Link>}</div>
       <div className='mt-5 ms-4'><Link to={"/"} className='navitem'>Contact</Link></div>
        </div>}
     
     </>

  )
}

export default Navbars