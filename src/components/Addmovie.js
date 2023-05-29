import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Addmovie({movies,setmovies}) {
  const [newmovie, setnewmovie] = useState({name:"",posterurl:"",description:"",rating:""});
  const add=()=>{setmovies([...movies, newmovie])}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
  <>
    <Button variant="primary" onClick={handleShow}>
      +
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add movie</Modal.Title>
      </Modal.Header>
      <Modal.Body> <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} />
        
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image" onChange={(e)=>setnewmovie({...newmovie,posterurl:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie desciption" onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})}  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rate</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rate" onChange={(e)=>setnewmovie({...newmovie,rating:e.target.value})} />
        
      </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{add();handleClose()}}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </>
)
}
 

export default Addmovie