import React, { useContext, useEffect, useState } from 'react'
import Navbars from '../Components/Navbars'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';
import { getfurAPI } from '../Services/allApi';
import { BASEURL } from '../Services/baseUrl';
import { addcontext } from '../Context/ContextShare'
import { useNavigate } from 'react-router-dom';
import './home.css'

function Home() {
  const navigate = useNavigate()
  const {addthings,setaddthings}=useContext(addcontext)

    const[products,setproducts]=useState([])
    useEffect(()=>{
      getallfurnitures()
    },[])
    const getallfurnitures=async()=>{
     const res=await getfurAPI()
     setproducts(res.data)
      console.log(res.data);
    }
    const handlefulldetails=(e)=>{
      console.log(e);
      setaddthings(e)
      navigate('/viewdetails')
    }
  return (
    <div className='w-100' style={{height:'100%'}}>
    <Navbars/>
    
    <div className=' hback  d-flex w-100 ' style={{height:'100%'}}>
        <Row className=' mt-5 justify-content-center w-100 ms-5 me-1' style={{height:'100%'}}>
        {products.map((items)=>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
          <img src={items.pimage?`${BASEURL}/uploads/${items.pimage}`:"https://bikeadvice.in/wp-content/uploads/2023/11/Royal-Enfield-Himalayan-452-Pic.jpg"}  alt='no' style={{width:'100%',height:"250px"}}/>
          <hr/>
          <Card.Body>
            <Card.Title className='text-center'>{items.pname}</Card.Title>
            <Card.Title className='text-center mt-3 fw-bolder text-danger'>&#8377; {items.price} </Card.Title>
            
            <div className='text-center mt-4'><button className='btn btn-outline-dark' onClick={e=>handlefulldetails(items)}>View Details</button></div>
          </Card.Body>
        </Card>
            </Col>
        ))
        }
    </Row></div>
    <div className=''>
      <Footer/>
    </div>
    
    </div>
  )
}

export default Home