import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getTriviaQuestions } from '../redux/actions';
import Loading from '../components/Loading';
// import Loading from '../components/Loading';

class Game extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getTriviaQuestions());
    // console.log(trivia);
    // const errorCode = 3;
    // if (trivia.response_code === errorCode) {
    //   localStorage.removeItem('token');
    //   history.push('/');
    // }
  }

  // shuffleQuestions = () => {

  // };

  render() {
    const { trivia, history } = this.props;
    const errorCode = 3;
    if (trivia.response_code === errorCode) {
      localStorage.removeItem('token');
      history.push('/');
    }
    if (Object.keys(trivia).length === 0) {
      return (
        <Loading />
      );
    }
    return (
      <div>
        <h1>Game</h1>
        <Header />
        {(trivia.results !== undefined && trivia.results.length !== 0) && (
          <div>
            <p data-testid="question-category">{trivia.results[0].category}</p>
            <p data-testid="question-text">{trivia.results[0].question}</p>
            {/* <section data-testid="answer-options">

            </section> */}
          </div>
        )}
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
