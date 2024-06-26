import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
   
    
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faVideo} beat />
          <span className='text-warning ms-3 fs-5'>Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  )
}

export default Header