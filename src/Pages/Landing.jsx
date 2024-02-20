import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './landing.css'
// import sideimage from '../images/[removal.ai]_053337e4-6e20-42e3-a3e2-a30f0c5084c4-room.png'

function Landing() {
  return (
 <Row className='back d-flex w-100 align-items-center' style={{height:"100vh"}}>

  

    <Col sm={12} md={6} lg={6} className='d-flex flex-column text-center '>
        <div>
            <h1 className='text-light fw-bolder'>Muebles</h1>
        </div>

        <div className='mt-3'><p className='text-light fw-bolder'>“Simplicity carried to an extreme becomes elegance.”</p></div>
        <div className='mt-3'><p className='text-light fw-bolder'>“Your home should be a story of who you are, and be a collection of what you love.”</p></div>
        <div className='mt-3'><p className='text-light fw-bolder'>"Furniture must have personality, as well as be beautiful."</p></div>
        <div className='mt-3 ' ><Link to={'/home'} className='btn btn-success'>Explore <i class="fa-solid fa-arrow-right"></i></Link></div>
    </Col>

{/* 
    <Col  sm={12} md={6} lg={4} className='d-flex flex-column'>
        <div>
            <img src={sideimage} alt="" />
        </div>
    </Col> */}

 </Row>
  )
}

export default Landing