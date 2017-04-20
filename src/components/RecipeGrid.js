import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import Recipe from './Recipe';
import { loadRecipes } from '../actions';
import sampleRecipes from '../sample-recipes';


// const Placeholder = () => {
//   return (
//     <div className="placeholder"></div>
//   );
// };

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
        <div>
          {
            recipes.map(recipe => {
              return (
                <LazyLoad height={200} key={recipe.id}>
                  <Recipe  recipe={recipe} />
                </LazyLoad>  
              );
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
