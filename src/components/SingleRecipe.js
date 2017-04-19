import React, { Component } from 'react';

export default class SingleRecipe extends Component {
  render() {
    return (
      <div>
        <h1>Single Recipe Component</h1>
        <h2>{this.props.match.params.recipeId}</h2>
      </div>
    );
  }
}
