import React, { Component } from 'react';

export class Main extends Component {
  componentDidMount() {
    document.getElementById('loading').remove();
  }
  render() {
    return (
      <div>
        <h1>Recipe Box</h1>
      </div>
    );
  }
}

export default Main;
