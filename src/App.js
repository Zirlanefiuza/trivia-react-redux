import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Game from './pages/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/game" component={ Game } />
        </Switch>
      </div>
    );
  }
}

export default App;
