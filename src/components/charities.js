import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import solidaritee from '../assets/solidaritee.png';
import homelessOxford from '../assets/homelessoxford.png';
import chooseLove from '../assets/chooselove.png';

function section(image, key){
    return(
        <Col xs={12} md={4} lg={4} xl={4} xxl={4} class="mb-5 pb-5" key={key}>
            <img className="resizable-image" src={image}/>
        </Col>
    )
}

const CharityImageRow = () => {
    return (
        <Row className="justify-content-center">
            <Col className="col-xl-9">
                <Row className="mt-md-5 py-panel px-0 mx-0 text-black text-center center">
                    {[solidaritee,homelessOxford,chooseLove].map((image, key) => section(image, key))}
                </Row>
            </Col>
        </Row>
    )
}

const Charities = () => {
    return(
        <div id="charities" className="mt-5 px-0 mx-0 text-black bg-white">
            <h1 className="fundder-title">Our Charities</h1>
            <p className="fundder-body">
                We have a number of charities on our app, and we are continuously partnering with new ones.
            </p>
            <CharityImageRow />
        </div>
    )
}

export default Charities;