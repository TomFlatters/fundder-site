import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import fundderBear from '../assets/bear.png';
import '../App.css';

const Footer = () => {
    return (
        <div>
            <Container className="py-4 text-white">
                <Row>
                    <Col className="order-2 pt-4 pt-sm-0" xs={12} sm={4, {order: 1}}>
                        <Row className="clear-list roboto-mono pb-3 align-items-center justify-content-center">
                            <div className="pr-3">Fundder</div>
                            <img src={fundderBear} className="footer-image"/>
                        </Row>
                    </Col>
                    <Col xs={12} sm={4, {order: 2}} className="order-1 pt-4 pt-sm-0 text-center">
                        <a><li className="clear-list fundder-footer-heading">Need Help?</li></a>
                        <a className="text-decoration-none" href="mailto:team@fundder.co"><li className="clear-list text-white">team@fundder.co</li></a>
                    </Col>
                    <Col xs={12, {order: 13}} sm={4, {order: 3}} className="order-3 pt-4 pt-sm-0 text-center">
                        <a className="text-decoration-none" href="#"><li className="clear-list text-white">Back to top</li></a>
                        <a className="text-decoration-none" href="/termsofuse.pdf"><li className="clear-list text-white">Terms of Use</li></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;