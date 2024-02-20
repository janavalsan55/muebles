import React, { useContext } from 'react'
import { addcontext } from '../Context/ContextShare'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BASEURL } from '../Services/baseUrl'
import './home.css'
function Viewdetails() {
    const navigate=useNavigate()
    const {addthings,setaddthings}=useContext(addcontext)

    const handleback=()=>{
        setaddthings()
        navigate('/home')

    }

  return (

    // <div>{addthings.price}</div>
    <div className='viewback' style={{height:'100vh'}}>
       <div > <button onClick={handleback} style={{border:'3px double black'}} className='btn btn-outline-dark text-light fw-bolder mt-4 ms-5'><i class="fa-solid fa-arrow-left me-1"></i>Back to home</button></div>
<Row className=''>
        <Col sm={12} md={12} lg={6} xl={6}  className='d-flex flex-column '>
           <div className='mt-5 ms-5 '> <img className='viewimg ' src={addthings?.pimage?`${BASEURL}/uploads/${addthings?.pimage}`:"https://bikeadvice.in/wp-content/uploads/2023/11/Royal-Enfield-Himalayan-452-Pic.jpg"} alt="" style={{width:'450px',height:"450px"}}/></div>
           
        </Col>

        <Col sm={12} md={12} lg={6} xl={6} className='d-flex flex-column'>
            <div className='mt-5 ms-2'><h2 className='fw-bolder text-light'>{addthings?.pname}</h2></div>
            <div className='mt-3 ms-2'><h2 className='fw-bolder text-danger'>&#8377;{addthings?.price}</h2></div>
            <div style={{width:'70%'}} className='mt-3 ms-2'><p className='fw-bolder text-light'>{addthings?.overview}</p></div>
           <div className=' mt-5 text-light'><h2>Contact Details:</h2></div>
           <div className='d-flex mt-3'>
            <div className='d-flex me-5 text-light'><h5>Seller Name:</h5> <h5 className='ms-2 '>{addthings?.uname}</h5></div>
            <div className='ms-5 d-flex text-light'><h5>Place:</h5><h5 className='ms-2 '>{addthings?.place}</h5></div>
          
           </div>
           
                <div className='d-flex'>
                    <div className='mt-5'><a href={`https://api.whatsapp.com/send?phone=91${addthings?.mobile}&text=Hello`} target='_blank' className='btn btn-outline-success'><i className="fa-brands fa-whatsapp fa-xl"></i></a></div>

                <div className='mt-5 ms-5'><a href={`tel:+91${addthings?.mobile}`} target='_blank' className='btn btn-outline-primary'><i className="fa-solid fa-phone fa-xl"></i></a></div>
                </div>
               
        </Col>
        </Row>
    </div>
  )
}

export default Viewdetails
