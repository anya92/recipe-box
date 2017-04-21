import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
          ? <div className="row sample-recipes">
              <a onClick={() => this.loadSampleRecipes()}>
                Load Sample Recipes
              </a>
            </div>
          : <div></div>  
        }
        <div className="row recipes">
          {
            recipes.map(recipe => {
              return <Recipe key={recipe.id} recipe={recipe} />;
            })
          }
        </div>
        <Link to="/add" className="add-button">+</Link>
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
