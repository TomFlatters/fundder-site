import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DoFundDone from './dofunddone.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const HowFundderWorks = () => {
    return(
        <div id="howitworks" className="mt-5 py-panel px-5 mx-0 text-black">
            <Row>
                <Col className="col-lg-9">
                    <h1 className="fundder-title mt-lg-4 pt-lg-4">How does Fundder work?</h1>
                    <p className="fundder-small">
                    Your friends see your challenge on their feed and can donate to your fundraising pot. Once this reaches its fundraising target (or before), you can upload a video of you doing this challenge that appears on their feed. 
                    </p><p className="fundder-small">
                    The pot is then instantly donated to your nominated charity! Voila!
You set the challenge and the fundraising target. Make someone laugh! Teach someone a skill! Whatever that may be, now you can make the world just that little bit better while doing it.
                        </p>
                        <p className="fundder-small">
                        Every user has a feed composed of 3 sections: do, fund, and done. 
                    </p>
                </Col>
            </Row>
                    
                    <DoFundDone className="center"/>
        </div>
    )
}

export default HowFundderWorks;