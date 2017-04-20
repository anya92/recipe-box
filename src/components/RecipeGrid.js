import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
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
        {
          recipes.length === 0
          ? <button
              className="btn btn-default"
              onClick={() => this.loadSampleRecipes()}
            >
              Load Sample Recipes
            </button>
          : <div></div>  
        }
        <div className="row">
          {
            recipes.map(recipe => {
              return <Recipe key={recipe.id} recipe={recipe} />;
            })
          }
        </div>
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
