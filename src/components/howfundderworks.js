import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DoFundDone from './dofunddone.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const HowFundderWorks = () => {
    return(
        <div id="howitworks" className="mt-5 py-panel px-0 mx-0 text-black">
            <Row>
                <Col className="col-lg-9">
                    <h1 className="fundder-title">How does Fundder work?</h1>
                    <p className="fundder-body text-grey py-4">
                        Fundder is a social network, where every user has their own profile and a feed.
                        The feed is composed of 3 sections: do, fund, and done.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-xl-9">
                    <DoFundDone />
                </Col>
            </Row>
        </div>
    )
}

export default HowFundderWorks;