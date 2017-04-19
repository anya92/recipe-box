import React, { Component } from 'react'; /* eslint-disable */
import { connect } from 'react-redux';

class SingleRecipe extends Component {
  render() {
    const id = this.props.match.params.recipeId;
    const recipe = this.props.recipes.filter(recipe => recipe.id === id)[0];
    return (
      <div>
        <h1>Single Recipe Component</h1>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.description}</p>
        <ul>
          {
            recipe.ingredients.map((ingredient, i) => {
              return (
                <li key={i}>{ingredient}</li>
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

export default connect(mapStateToProps)(SingleRecipe);
