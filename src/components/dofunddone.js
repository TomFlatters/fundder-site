import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import doImage from '../assets/do.png';
import fundImage from '../assets/fund.png';
import doneImage from '../assets/done.png';

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