import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link, Outlet } from 'react-router-dom';
import logo from '../../public/image/logo.png'
import Home from './Home/Home';
import Chef from './Chef';
import Footer from './Footer';

const Mains = () => {
    return (
      <div>
        <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary  ">
        <Container >
            <img className='w-10 h-10 ' p-3 src={logo} alt="" />
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
             className="me-auto ">
              <Nav.Link href="/" className='bg-info'>Home</Nav.Link>
              <Nav.Link href="/login">  Login   </Nav.Link>
             
            </Nav>
            <Nav>
              <h1><Nav.Link href="/regstion">Regstion</Nav.Link></h1>
              <Nav.Link eventKey={2} href="#memes">
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
       
      </Navbar>
        </div>

<Outlet></Outlet>
<Footer></Footer>
      </div>
      
     

    );
};

export default Mains;