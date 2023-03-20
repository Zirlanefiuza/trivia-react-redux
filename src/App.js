import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/game" component={ Game } />
          <Route path="/settings" component={ Settings } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
