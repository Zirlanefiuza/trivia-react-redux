import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
// import { fetchTrivia } from '../redux/actions';

class Header extends Component {
  // componentDidMount(){
  //   fetchTrivia()
  // }
  render() {
    const { name, email } = this.props; // Obtém o nome e o placar do estado do Redux
    const hash = md5(email.toString());
    const gravatarUrl = `https://www.gravatar.com/avatar/${hash}`;

    return (
      <header>
        <img
          src={ gravatarUrl }
          alt="Imagem do perfil"
          data-testid="header-profile-picture"
        />
        <h1 data-testid="header-player-name">{name}</h1>
        <span data-testid="header-score">0</span>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.score.score,
  email: state.player.email,
});

export default connect(mapStateToProps)(Header);
