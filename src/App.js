import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from 'views/home/Home';

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
    <Home></Home>
    /** 
    <HashRouter>
      <Page>
        {*//** https://www.codingame.com/playgrounds/6517/react-router-tutorial
         * https://www.codementor.io/@packt/using-the-link-and-navlink-components-to-navigate-to-a-route-rieqipp42
         * https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
         * https://gist.github.com/duaneleem/3a5a62abc62db156b88a1617380e9704
         *//** }
        <Switch>
          {getRoutes(pages)}
        </Switch>
      </Page>
    </HashRouter>*/
  );
}

export default App;