import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import phone from '../assets/landing_video.gif';

const Benefit = ({title, desc}) => {
    return(
        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="pb-1 benefit">
            <h3 className="fundder-section-subtitle">{title}</h3>
            <div>
                <p className="fundder-small double-lines benefit-p-sizing">
                    {desc}
                </p>
            </div>
        </Col>
    )
}

const ListBenefits = () => {
    return(
        <div id="features" className="mt-5 py-panel px-5 mx-0 text-black">
            <Row>
                <Col className="col-lg-9">
                    
                </Col>
            </Row>
            
            <div className="mt-5">
                
                <Row>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                        <img className="demo-phone" src={phone}/>
                    </Col>
                    <Col xs={12} md={6} lg={8} xl={8} xxl={8} className="pt-5 pt-lg-0 text-left">
                    <h1 className="fundder-title">Fundder is unique</h1>
                    <p className="fundder-body mb-4 pb-4">
                        We are the only app that encourages you to make your challenges as unique as possible.
                    </p>
                        <Row>
                            <Benefit title="Challenge Friends" desc="Ever wanted your friends to do something? This is an opportunity to challenge them for a good cause." />
                            <Benefit title="Find New Ideas" desc="Want to raise for charity but don't want to run another marathon? Our 'Do' feed contains new challenges." />
                            <Benefit title="View Challenges" desc="See challenges other people have completed, we promise that you will see more than just marathons!" />
                            <Benefit title="Become Famous" desc="Do something different and make yourself stand out. It doesn't have to be physically or mentally demanding." />
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ListBenefits;