import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPlayerInfo } from '../redux/actions';
import '../styles.css';

class Login extends Component {
  state = {
    name: '',
    email: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePlayClick = () => {
    const { name, email } = this.state;
    const { handleSetPlayerInfo, history } = this.props;
    handleSetPlayerInfo({ name, email });
    history.push('/game');
  };

  validateEmail = () => {
    const { email } = this.state;
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  // validateEmail refatorada em grupo função faz validação de email

  enableButton = () => !(this.validateEmail());

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Name"
            value={ name }
            onChange={ this.handleNameChange }
            data-testid="input-player-name"
          />
          <input
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleEmailChange }
            data-testid="input-gravatar-email"
          />
          <button
            onClick={ this.handlePlayClick }
            disabled={ this.enableButton() }
            data-testid="btn-play"
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSetPlayerInfo: (name, email) => dispatch(setPlayerInfo(name, email)),
});

Login.propTypes = {
  handleSetPlayerInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
