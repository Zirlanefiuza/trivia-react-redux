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

  isPlayButtonDisabled = () => {
    const { name, email } = this.state;
    return name === '' || email === '' || !email.includes('@');
  };

  render() {
    const { name, email } = this.state;

    return (
      <div className="login-box">
        <form className="login-container">
          <input
            type="text"
            placeholder="Name"
            value={ name }
            onChange={ this.handleNameChange }
            data-testid="input-player-name"
            className="login-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleEmailChange }
            data-testid="input-gravatar-email"
            className="login-input"
          />
          <button
            onClick={ this.handlePlayClick }
            disabled={ this.isPlayButtonDisabled() }
            data-testid="btn-play"
            className="login-btn"
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
