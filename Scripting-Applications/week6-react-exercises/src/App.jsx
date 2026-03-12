import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import CatalogBrowser from './exercises/ex1-catalog-browser/CatalogBrowser';
import ExampleFetchComponent from './exercises/ex2-useFetchJSON/ExampleFetchComponent';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/catalog" component={CatalogBrowser} />
          <Route path="/fetch-example" component={ExampleFetchComponent} />
          <Route path="/" exact>
            <h2>Welcome to the Week 6 Exercises</h2>
            <p>Select an exercise from the navigation menu.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;