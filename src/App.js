import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Page from './components/Page';
import React from 'react';
import ReverseEngineeringHuaweiSmartAXMT882 from './pages/ReverseEngineeringHuaweiSmartAXMT882/ReverseEngineeringHuaweiSmartAXMT882';
import Sample from './pages/Sample';

function App(props) {

  return (
    <BrowserRouter>
      <Page>
        <Switch>
          <Route path="/" component={Sample} exact />
          <Route path="/sample" component={Sample} />
          <Route component={Error} />
        </Switch>
      </Page>
    </BrowserRouter>
  );
}

export default App;