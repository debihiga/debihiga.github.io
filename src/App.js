import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import React from 'react';
import Sample from './pages/Sample';
import { pages } from './pages/Pages';

function App(props) {

  return (
    <BrowserRouter>
      <Page>
        {/** https://www.codingame.com/playgrounds/6517/react-router-tutorial
         * https://www.codementor.io/@packt/using-the-link-and-navlink-components-to-navigate-to-a-route-rieqipp42
         */}
        <Switch>
          {pages.map((page) => (
            <Route key={page.name} component={page.component} path={page.path} />
          ))}
          <Route component={Sample} path="/sample" />
        </Switch>
      </Page>
    </BrowserRouter>
  );
}

export default App;