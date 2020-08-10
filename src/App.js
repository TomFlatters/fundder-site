import React from 'react';

import CustomNavbar from './components/navbar';
import MainPanel from './components/mainpanel';
import HowFundderWorks from './components/howfundderworks';
import ListBenefits from './components/listbenefits';
import Charities from './components/charities';
import SayHello from './components/sayhello';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="purple-diagonal limit-width">
        <CustomNavbar />
        <MainPanel />
      </div>
      <div className="limit-width">
        <HowFundderWorks />
      </div>
      <div className="purple-curves text-center flex-col space-between limit-width">
        <ListBenefits id="features" />
      </div>
      <div className="limit-width">
        <Charities />
      </div>
      <div className="limit-width bg-pink">
        <SayHello />
      </div>
    </div>
  );
}

export default App;
