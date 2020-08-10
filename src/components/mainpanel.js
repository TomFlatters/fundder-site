import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import phone from '../assets/phone.png';

const MainPanel = () => {
  return (
    <div id="home" className="px-0 mb-5 mx-0 py-panel">
      <Row className="flex-row space-between align-start">
        <Col xs={12} md={12} lg={6} xl={7} xxl={7} id="fundder-title-block" className="flex-col order-lg-2 text-right">
          <h1 className="fundder-title mt-lg-4 py-lg-4">Our mission is to get people hooked on giving.</h1>
          <p className="fundder-body">Fundder is a social network for better, easier fundraising.</p>
          <div className="mt-lg-4">
            <button class="fundder-button">Coming Soon</button>
          </div>
        </Col>
        <Col xs={12} md={12} lg={3} xl={4} xxl={4} className="flex-col order-lg-1">
          <div className="my-4">
            <img src={phone} className="demo-phone" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MainPanel;