import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadRecipes } from '../actions';
import sampleRecipes from '../sample-recipes';

class RecipeGrid extends Component {
  loadSampleRecipes() {
    this.props.loadRecipes(sampleRecipes);
  }

  render() {
    const { recipes } = this.props;
    return (
      <div>
        <h2>Recipes Grid</h2>
        <button
          className="btn btn-default"
          onClick={() => this.loadSampleRecipes()}
        >
        Load Sample Recipes
        </button>
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

export default connect(mapStateToProps, { loadRecipes })(RecipeGrid);
