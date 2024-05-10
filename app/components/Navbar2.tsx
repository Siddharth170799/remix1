import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import home from '/app/styles/home.css';
import '/app/styles/home.css';




function Navbar2(){

  return (
    <div>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='hello'>Pricing</Nav.Link>
            <div className='text-xl'>About Us</div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}


export default Navbar2;

// export function links(){
//     return [{
//         rel:'stylesheet',href:home
//     }]
   
// }

