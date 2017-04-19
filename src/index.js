import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import Main from './components/Main';
import App from './components/App';
import AddRecipe from './components/AddRecipe';
import SingleRecipe from './components/SingleRecipe';
import NotFound from './components/NotFound';

const routes = (
  <Router>
    <div>
      <Route component={Main} />
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/add" component={AddRecipe}/>
        <Route path="/recipe/:recipeId" component={SingleRecipe}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

render(routes, document.getElementById('root'));
