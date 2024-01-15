import React, { useContext, useEffect, useState } from 'react'
import { addfurAPI } from '../Services/allApi'
import { addcontext } from '../Context/ContextShare'

function Addproducts() {
    const [productData,setproductData]=useState({
        pname:"",price:"",overview:"",mobile:"",uname:"",place:"",pimage:"",userid:"",access:"pending"
    })
    useEffect(()=>{
        productData.userid=sessionStorage.getItem("userId")
    },[])

    const handleadd=async()=>{
        
        console.log(productData);
        const {pname,price,overview,mobile,uname,place,pimage,userid,access}=productData
        if(!productData.pname || !productData.price || !productData.mobile || !productData.uname || !productData.place || !productData.pimage){
            alert("Please fill the form completely")
        }
        else{
            const reqBody = new FormData()
            reqBody.append("pname",pname)
            reqBody.append("price",price)
            reqBody.append("overview",overview)
            reqBody.append("mobile",mobile)
            reqBody.append("uname",uname)
            reqBody.append("place",place)
            reqBody.append("pimage",pimage)
            reqBody.append("userid",userid)
            reqBody.append("access",access)
           
            const reqHeader = {
                "Content-Type":"multipart/form-data"
            }
            const res=await addfurAPI(reqBody,reqHeader)
            console.log(res);
            if(res.status===200 ){
                alert("Added successfully")
                setproductData({pname:"",price:"",overview:"",mobile:"",uname:"",place:"",pimage:"",userid:"",access:"pending"})

            }
        }

    }
  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
    <div className='bg-light shadow rounded d-flex flex-column' style={{width:'500px',height:'560px'}}>
      <div><h2 className='fw-bolder text-center mt-4'>Add Products</h2></div>
      <div className='ms-5 me-5'><input type="text" placeholder='Product Name' className='form-control mt-5' value={productData.pname} onChange={e=>setproductData({...productData,pname:e.target.value})}/></div>
      <div className='ms-5 me-5'><input type="text" placeholder='Price' className='form-control mt-3' value={productData.price} onChange={e=>setproductData({...productData,price:e.target.value})}/></div>
      <div className='ms-5 me-5'><input type="text" placeholder='Overview' className='form-control mt-3' value={productData.overview} onChange={e=>setproductData({...productData,overview:e.target.value})}/></div>
      <div className='ms-5 me-5'><input type="text" placeholder='Mobile Number' className='form-control mt-3' value={productData.mobile} onChange={e=>setproductData({...productData,mobile:e.target.value})} /></div>
      <div className='ms-5 me-5'><input type="text" placeholder='Your Name' className='form-control mt-3' value={productData.uname} onChange={e=>setproductData({...productData,uname:e.target.value})}/></div>
      <div className='ms-5 me-5'><input type="text" placeholder='Place' className='form-control mt-3' value={productData.place} onChange={e=>setproductData({...productData,place:e.target.value})}/></div>
      <div className='ms-5 me-5'><input type="file" placeholder='Image' className='form-control mt-3' onChange={e=>setproductData({...productData,pimage:e.target.files[0]})}/></div>


      <div className='text-center'><button className='btn btn-outline-success mt-4 ' style={{borderRadius:'16px',width:'120px'}} onClick={handleadd}>Add</button></div>
       
      </div>

    </div>
 )
}

export default Addproducts