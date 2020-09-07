import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import doImage from '../assets/do.png';
import fundImage from '../assets/fund.png';
import doneImage from '../assets/done.png';

let sectionData = [
    { 'title': 'Do', 'image': doImage, 
    'text': 'something viral! Scroll through a list of trending challenges suggested by charities or make one up entirely by yourself!' },
    { 'title': 'Fund', 'image': fundImage, 
    'text': 'Donate towards any fundraiser in the world with just one click!' },
    { 'title': 'Done', 'image': doneImage, 
    'text': 'View completed challenges in the "Done" feed. Endless videos trending both locally and around the world!' }
]

function section(data, key){
    return(
        <div class="card mt-5 mx-3" key={key}>
    <img src={data.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{data.title}</h5>
      <p class="card-text">{data.text}</p>
    </div>
  </div>
    )
}

const DoFundDone = () => {
    return (
        <div class="card-deck">
            {sectionData.map((data, key) => section(data, key))}
        </div>
    )
}

export default DoFundDone;