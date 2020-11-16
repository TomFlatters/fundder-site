import React from 'react';

import CustomNavbar from './components/navbar';
import MainPanel from './components/mainpanel';
import TaylorsPanel from './components/taylorspanel';
import HowFundderWorks from './components/howfundderworks';
import ListBenefits from './components/listbenefits';
import Charities from './components/charities';
import SayHello from './components/sayhello';
import Footer from './components/footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/taylors">
          <div>
            <div className="purple-diagonal">
              <CustomNavbar />
              <TaylorsPanel />
            </div>
            </div>
        </Route>
        <Route path="/">
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
        </Route>
      </Switch>

    </Router>
    
  );
}

export default App;
