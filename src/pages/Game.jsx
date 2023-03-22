import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game</h1>
        <Header />
        <button data-testid="btn-next">
          Next
        </button>
      </div>
    );
  }
}

export default connect(null)(Game);
