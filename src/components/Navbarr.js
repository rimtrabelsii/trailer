import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Navbarr({settext,setrate}) {
  
  return (
  
    <div><Navbar className='nav' backgroundColor="#ddebf"  expand="lg" variant='light' >
    <Container fluid>
      <img    src="/mv11.png"  alt="error" width={"80px"}  />
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" style={{marginRight:"85px",color:"blue"}} > <Link style={{textDecoration:"none", color:"blue" }} to ="/">   <h4>Movies  </h4>  </Link> </Nav.Link>
          <Nav.Link href="#action2" style={{marginRight:"82px",color:"blue"}}> <Link style={{textDecoration:"none", color:"blue" }} to ="/contact"> <h4>  Contact   </h4></ Link>  </Nav.Link>
          <Nav.Link href="#action2" style={{marginRight:"123px",color:"blue"}}> <Link style={{textDecoration:"none", color:"blue" }} to ="/about" > <h4>About  </h4>   </Link> </Nav.Link>
          <NavDropdown title="Link"   id="navbarScrollingDropdown" >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
             comedia
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Drama
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        <ReactStars 
        onChange={(newRating)=>(setrate(newRating))}
              count={5}
             
              size={24}
              activeColor="blue"
            
         />
        <Form className="d-flex">
          <Form.Control style={{marginLeft:"15px"}}
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>settext(e.target.value)}
          />
        
          <Button className='but'  
         
          >Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Navbarr