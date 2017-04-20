import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Main extends Component {
  componentDidMount() {
    document.getElementById('loading').remove();
  }

  render() {
    return (
      <div>
      <div className="hero">
        <Link to="/">Recipe Box</Link>
        <hr/>
      </div>
      </div>
    );
  }
}

export default Main;
