import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { requestTrivia } from '../redux/actions';

class Game extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(requestTrivia())
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

// const mapStateToProps = (globalState) => {
//   token: 
// }

export default connect(null)(Game);
