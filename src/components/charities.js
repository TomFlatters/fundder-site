import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import solidaritee from '../assets/solidaritee.png';
import homelessOxford from '../assets/homelessoxford.png';
import chooseLove from '../assets/chooselove.png';
import oxfordMind from '../assets/MIND_Oxfordshire_Stack_Above_white.png'

let sectionData = [
    { 'title': 'Solidaritee', 'image': solidaritee, 'url': 'https://www.solidaritee.org.uk/'},
    { 'title': 'Homeless Oxfordshire', 'image': homelessOxford, 'url': 'https://homelessoxfordshire.uk/'},
    { 'title': 'Choose Love / Help Refugees', 'image': chooseLove, 'url': 'https://helprefugees.org/'},
    { 'title': 'Oxfordshire Mind', 'image': oxfordMind, 'url': 'https://www.oxfordshiremind.org.uk/'}
]

const CharityImageRow = () => {
    return (
        <div class="card-deck">
            {sectionData.map((data, key) => section(data, key))}
        </div>
    );
}

function section(data, key){
    return(
        <a href={data.url} target="_blank"> 
        <div class="charity-card mt-5 mx-3" key={key}>
            
    <img src={data.image} class="card-img-top" alt="..."/>
    <div class="card-body bottom_aligner">
      <p class="card-text text-black">{data.title}</p>
    </div>
    
  </div>
  </a>
  
    )
}

const Charities = () => {
    return(
        <div id="charities" className="mt-5 py-panel px-5 mx-0 text-black">
            <Row>
                <Col className="col-lg-9">
                    <h1 className="fundder-title mt-lg-4 pt-lg-4">Our Charities</h1>
                    <p className="fundder-body">
                        We have a number of charities on our app, and we are continuously partnering with new ones.
                    </p>
                </Col>
            </Row>
            <CharityImageRow />
        </div>
    );
            
}

export default Charities;