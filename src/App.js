import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import React from 'react';
import { pages } from './constants/Pages';

function getRoutes(pages) {
  let routes = [];
  pages.forEach((page) => {
    if(page.children) {
      let subRoutes = getRoutes(page.children);
      subRoutes.forEach((subRoute) => {routes.push(subRoute)});
    }
    // Parent must be pushed at the end
    // https://stackoverflow.com/questions/53236282/nested-react-router-hide-parent-component-on-showing-nested-child-component
    routes.push(<Route key={page.name} component={page.component} path={page.url} />);
  });
  return routes;
}

function App(props) {
  return (
    <BrowserRouter>
      <Page>
        {/** https://www.codingame.com/playgrounds/6517/react-router-tutorial
         * https://www.codementor.io/@packt/using-the-link-and-navlink-components-to-navigate-to-a-route-rieqipp42
         */}
        <Switch>
          {getRoutes(pages)}
        </Switch>
      </Page>
    </BrowserRouter>
  );
}

export default App;