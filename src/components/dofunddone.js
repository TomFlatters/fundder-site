import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import doImage from '../assets/doimage.png';
import fundImage from '../assets/fundimage.png';
import doneImage from '../assets/doneimage.png';

let sectionData = [
    { 'title': 'Do', 'image': doImage, 
    'text': 'Find ideas for your own fundraisers or challenge friends in the "Do" feed' },
    { 'title': 'Fund', 'image': fundImage, 
    'text': 'Donate to active fundraisers or raise money for your own in the "Fund" feed. Make challenges come to life.' },
    { 'title': 'Done', 'image': doneImage, 
    'text': 'View completed challenges in the "Done" feed.' }
]

function section(data, key){
    return(
        <div class="col-md-4 mt-5 pb-5 text-center" key={key}>
            <img className="resizable-image" src={data.image}/>
            <h2 class="fundder-section-title mt-5 mb-4 text-left">{data.title}</h2>
            <p class="fundder-body text-grey text-left">{data.text}</p>
        </div>
    )
}

const DoFundDone = () => {
    return (
        <div className="row px-0 mx-0 text-black">
            {sectionData.map((data, key) => section(data, key))}
        </div>
    )
}

export default DoFundDone;