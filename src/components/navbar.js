import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import fundderBear from '../assets/bear.png';

const CustomNavbar = () => {
    return(
        <Navbar collapseOnSelect className="py-lg-5 py-3" expand="lg">
        <Row className="justify-content-between align-items-center">
          <Navbar.Brand className="text-white fundder-nav-title" href="#home">
              <img src={fundderBear} className="mr-lg-4 fundder-nav-logo"/>
              <span className="fundder-nav-title-text">Fundder</span>
            </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto" style={{color: 'white'}}>
                <Nav.Link className="mx-lg-2 px-1 text-white" id="fundder-nav-link" href="#home">Home</Nav.Link>
                <Nav.Link className="mx-lg-2 px-1 text-white" id="fundder-nav-link" href="#howitworks">How It Works</Nav.Link>
                <Nav.Link className="mx-lg-2 px-1 text-white" id="fundder-nav-link" href="#features">Features</Nav.Link>
                <Nav.Link className="mx-lg-2 px-1 text-white" id="fundder-nav-link" href="#charities">Charities</Nav.Link>
                <Nav.Link className="mx-lg-2 px-1 text-white" id="fundder-nav-link" href="#contact">Contact</Nav.Link>
              </Nav>
              <Nav>
              </Nav>
            </Navbar.Collapse>
        </Row>
      </Navbar>
    )
}

export default CustomNavbar;