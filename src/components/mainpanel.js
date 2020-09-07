import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import phone from '../assets/accordion-view.png';
import iosButton from '../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.png';
import googleButton from '../assets/google-play-badge.png';
import MobileStoreButton from 'react-mobile-store-button';

const MainPanel = () => {
  const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
  return (
    
    <div id="home" className="px-0 mb-0 mx-0 py-5 px-5">
      <Row className="flex-row space-between align-start">
        <Col xs={12} md={6} lg={5} xl={5} xxl={5} id="fundder-title-block" className="flex-col offset-lg-1 order-lg-1 text-left">
          <h1 className="fundder-title mt-lg-4 pt-lg-4">Our mission is to get people hooked on giving.</h1>
          <p className="fundder-body">Fundder is a social network for quicker, easier fundraising.</p>
          <a href="https://apps.apple.com/gb/app/fundder/id1529120882" target="_blank">
            <img className="store-button pt-5" src={iosButton}/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.fundder&hl=en_US" target="_blank">
            <img className="store-button py-4" src={googleButton}/>
          </a>
        </Col>
        <Col xs={12} md={6} lg={5} xl={5} xxl={5} className="flex-col order-lg-2">
          <div className="my-0">
            <img src={phone} className="demo-phone-main" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MainPanel;