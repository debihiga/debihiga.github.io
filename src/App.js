import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import React from 'react';
import { pages } from './constants/Pages';

function getSwitch(pages) {
  return pages.map((page) => {
    if (!page.children) {
      return (
        <Route key={page.name} component={page.component} path={page.url} />
      );
    } else {
      return (
        <React.Fragment key={page.name}>
          <Route key={page.name} component={page.component} path={page.url} />
          {getSwitch(page.children)}
        </React.Fragment>
      );
    }
  })
}

function App(props) {
  return (
    <BrowserRouter>
      <Page>
        {/** https://www.codingame.com/playgrounds/6517/react-router-tutorial
         * https://www.codementor.io/@packt/using-the-link-and-navlink-components-to-navigate-to-a-route-rieqipp42
         */}
        <Switch>
          {getSwitch(pages)}
        </Switch>
      </Page>
    </BrowserRouter>
  );
}

export default App;