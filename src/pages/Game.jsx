import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getTriviaQuestions } from '../redux/actions';

class Game extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getTriviaQuestions());
  }

  render() {
    return (
      <div>
        <h1>Game</h1>
        <Header />
      </div>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = (globalState) => {
//   token:
// }

export default connect(null)(Game);
