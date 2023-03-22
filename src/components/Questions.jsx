import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../Styles/answers.css';

class Questions extends React.Component {
  state = {
    shuffledQuestions: [],
    answers: false,
  };

  componentDidMount() {
    const { question } = this.props;
    const correctAnswer = { question: question.correct_answer,
      correct: true,
      dataTestId: 'correct-answer',
      className: 'correctAnswer' };
    const wrongAnswer = question.incorrect_answers.map((wrongQuestion, i) => (
      {
        question: wrongQuestion,
        correct: false,
        dataTestId: `wrong-answer-${i}`,
        className: 'incorrectAnswers' }
    ));
    const arrayOfQuestions = [...wrongAnswer,
      correctAnswer];
    const randomizer = 0.5;
    const shuffled = arrayOfQuestions.sort(() => Math.random() - randomizer);
    this.setState({ shuffledQuestions: shuffled });
    // lógica construída com Fernando Ferreira, Poliana Marques, Pedro Nascimento, Allex Thiago, Raphael Mocellin
  }

  handleClick = () => {
    this.setState({
      answers: true,
    });
  };

  render() {
    const { trivia } = this.props;
    const { shuffledQuestions, answers } = this.state;
    // if (shuffledQuestions.lenght === 0 ) {
    //   return <Loading />
    // }
    return (
      <section data-testid="answer-options">
        <p>{`cola: ${trivia.results[0].correct_answer}`}</p>
        {
          shuffledQuestions.map((question, index) => (
            <button
              data-testid={ question.dataTestId }
              key={ index }
              onClick={ this.handleClick }
              className={ answers && question.className }
            >
              { question.question }
            </button>
          ))
        }
        {
          answers && (
            <button
              data-testid="btn-next"
            >
              Next
            </button>
          )
        }
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
