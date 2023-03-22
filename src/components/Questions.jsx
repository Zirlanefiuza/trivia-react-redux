import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Questions extends React.Component {
  componentDidMount() {
    const { trivia: { results }, question } = this.props;
    console.log(results);
    const correctAnswer = { question: question.correct_answer,
      correct: true,
      dataTestId: 'correct-answer' };
    const wrongAnswer = question.incorrect_answers.map((wrongQuestion, i) => (
      { question: wrongQuestion, correct: false, dataTestId: `wrong-answer-${i}` }
    ));
    const arrayOfQuestions = [...wrongAnswer,
      correctAnswer];
    console.log(arrayOfQuestions);
  }

  render() {
    const { trivia } = this.props;
    return (
      <section data-testid="answer-options">
        <p>{trivia.results[0].correct_answer}</p>
      </section>
    );
  }
}

Questions.propTypes = {
//   dispatch: PropTypes.func.isRequired,
  trivia: PropTypes.shape({
    response_code: PropTypes.number,
    results: PropTypes.arrayOf(Object),
  }).isRequired,
  //   history: PropTypes.shape({
  //     push: PropTypes.func.isRequired,
  //   }).isRequired,
  question: PropTypes.shape({
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const mapStateToProps = (globalState) => ({
  trivia: globalState.trivia,
});

export default connect(mapStateToProps)(Questions);
