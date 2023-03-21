import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchToken, setPlayerInfo } from '../redux/actions';
// import '../styles.css';

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

  handlePlayClick = (event) => {
    event.preventDefault();
    const { name, email } = this.state;
    const { history, dispatch } = this.props;

    dispatch(fetchToken());
    dispatch(setPlayerInfo(name, email));
    history.push('/game');
  };

  validateEmail = () => {
    const { email, name } = this.state;
    const re = /\S+@\S+\.\S+/;
    return re.test(email) && name;
  };
  // validateEmail refatorada em grupo função faz validação de email

  enableButton = () => !(this.validateEmail());

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={ name }
              onChange={ this.handleNameChange }
              data-testid="input-player-name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="Email"
              value={ email }
              id="email"
              onChange={ this.handleEmailChange }
              data-testid="input-gravatar-email"
            />
          </label>
          <button
            onClick={ this.handlePlayClick }
            disabled={ this.enableButton() }
            data-testid="btn-play"
            type="button"
            name="Play"
          >
            Play
          </button>
          <Link to="/settings">
            <button
              type="button"
              data-testid="btn-settings"
              name="settings"
            >
              Settings
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   handleSetPlayerInfo: (name, email) => dispatch(setPlayerInfo(name, email)),
// });

Login.propTypes = {
  handleSetPlayerInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}.isRequired;

export default connect()(Login);
