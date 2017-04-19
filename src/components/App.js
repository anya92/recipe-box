import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div>
        <h2>Recipes Grid</h2>
        <ul>
          {
            recipes.map(recipe => {
              return (
                <li key={recipe.id}><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>{recipe.image}, {recipe.description}, {recipe.ingredients}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state
  };
}

export default connect(mapStateToProps)(App);
