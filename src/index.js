import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';

import Main from './components/Main';
import RecipeGrid from './components/RecipeGrid';
import AddRecipe from './components/AddRecipe';
import SingleRecipe from './components/SingleRecipe';
import NotFound from './components/NotFound';

import reducer from './reducers';
const store = createStore(reducer);

const routes = (
  <Router>
    <div>
      <Route component={Main}/>
      <Switch>
        <Route exact path="/" component={RecipeGrid}/>
        <Route path="/add" component={AddRecipe}/>
        <Route path="/recipe/:recipeId" component={SingleRecipe}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

render(
  <Provider store={store}>
    {routes}
  </Provider>, 
  document.getElementById('root')
);
