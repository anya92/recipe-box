import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Main extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('loading').remove();
    }, 1500);
  }

  render() {
    return (
      <div className="hero">
        <Link to="/">Recipe Box</Link>
      </div>

    );
  }
}

export default Main;
