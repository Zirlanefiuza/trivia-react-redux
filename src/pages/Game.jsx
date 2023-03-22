import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getTriviaQuestions } from '../redux/actions';

class Game extends Component {
  componentDidMount() {
    const { dispatch, trivia, history } = this.props;
    dispatch(getTriviaQuestions());
    const errorCode = 3;
    if (trivia.response_code === errorCode) {
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  render() {
    // const { trivia } = this.props;
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
  trivia: PropTypes.shape({
    response_code: PropTypes.number,
    results: PropTypes.arrayOf(Object),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (globalState) => ({
  trivia: globalState.trivia,
});

export default connect(mapStateToProps)(Game);
