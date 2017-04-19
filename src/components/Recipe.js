import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions';

class Recipe extends Component {
  deleteRecipe(id) {
    this.props.deleteRecipe(id);
  }

  render() {
    const recipe = this.props.recipe;
    return (
      <div className="item">
        <Link to={`/recipe/${recipe.id}`}>
          <img src={recipe.image} alt={recipe.title} />
        </Link>
        <p>{recipe.title}</p>
        <a onClick={() => this.deleteRecipe(recipe.id)}>usuń</a>
      </div>
    );
  }
}

export default connect(null, { deleteRecipe })(Recipe);
