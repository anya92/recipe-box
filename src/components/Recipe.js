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
      <div className="col-sm-6 col-md-4">
      <figure className="recipe-list">
        <Link to={`/recipe/${recipe.id}`}>
          <img src={recipe.image} alt={recipe.title} className="responsive"/>
        </Link>
        <figcaption className="recipe-title"> 
        <h2>{recipe.title}</h2>
        <a onClick={() => this.deleteRecipe(recipe.id)}>&#x2715;</a>
        </figcaption>
        </figure>
      </div>
    );
  }
}

export default connect(null, { deleteRecipe })(Recipe);
