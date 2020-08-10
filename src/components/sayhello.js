import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SayHello = () => {
    return(
        <div id="contact" className="py-panel mt-5 px-0 mx-0 text-white">
            <h1 className="fundder-title text-center">Say Hello</h1>
            <form action="mailto:getintouch@fundder.web.app" className="email-form roboto-mono">
                <Row className="flex-d justify-content-center">
                    <Col xs={12} md={8} lg={6} xl={5} xxl={4}>
                        <div class="form-group">
                            <label className="fundder-small" for="name">Name</label>
                            <input type="text" id="name" required class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label className="fundder-small" for="email">Email</label>
                            <input type="email" id="email" required class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label className="fundder-small" for="msg-body">Your Message</label>
                            <textarea rows="5" type="text" id="msg-body" required class="form-control"/>
                        </div>
                        <div className="text-center pt-3">
                            <button className="fundder-button" type="submit">Send Message</button>                            
                        </div>
                    </Col>
                </Row>

            </form>
        </div>
    )
}

export default SayHello;