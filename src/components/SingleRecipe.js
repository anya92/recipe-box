import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SingleRecipe extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.description}</p>
        <div>
          {
            recipe.ingredients.map((ingredient, i) => {
              return (
                <p key={i}>{ingredient}</p>
              );
            })
          }
        </div>
        <Link to={`/recipe/${recipe.id}/edit`}>Edytuj</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.recipeId;
  const recipe = state.filter(recipe => recipe.id === id)[0];
  return {
    recipe: recipe
  };
}

export default connect(mapStateToProps)(SingleRecipe);
