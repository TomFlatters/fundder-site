import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import fundderBear from '../assets/pink-bear.png';

const CustomNavbar = () => {
    return(
        <Navbar collapseOnSelect className="py-lg-2 py-2" expand="lg">
          <Navbar.Brand className="text-black fundder-nav-title" href="#home">
              <img src={fundderBear} className="mr-lg-3 fundder-nav-logo"/>
              <span className="fundder-nav-title-text mt-5">Fundder</span>
            </Navbar.Brand>
          
          <br />
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="mx-lg-2 px-3 text-black" id="fundder-nav-link" href="/#home">Home</Nav.Link>
                <Nav.Link className="mx-lg-2 px-3 text-black" id="fundder-nav-link" href="/#howitworks">How It Works</Nav.Link>
                <Nav.Link className="mx-lg-2 px-3 text-black" id="fundder-nav-link" href="/#features">Features</Nav.Link>
                <Nav.Link className="mx-lg-2 px-3 text-black" id="fundder-nav-link" href="/#charities">Charities</Nav.Link>
                <Nav.Link className="mx-lg-2 px-3 text-black" id="fundder-nav-link" href="/#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
}

export default CustomNavbar;