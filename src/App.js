import React from 'react';

import CustomNavbar from './components/navbar';
import MainPanel from './components/mainpanel';
import HowFundderWorks from './components/howfundderworks';
import ListBenefits from './components/listbenefits';
import Charities from './components/charities';
import SayHello from './components/sayhello';
import Footer from './components/footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="purple-diagonal">
        <CustomNavbar />
        <MainPanel />
      </div>
      <div className="limit-width">
        <HowFundderWorks />
      </div>
      <div className="bg-grey flex-col space-between limit-width">
        <ListBenefits id="features" />
      </div>
      <div className="limit-width">
        <Charities />
      </div>
      <div className="limit-width bg-pink">
        <SayHello />
      </div>
      <div className="limit-width bg-pink">
        <Footer />
      </div>
    </div>
  );
}

export default App;
