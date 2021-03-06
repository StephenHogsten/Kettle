import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import _ClickMe from '../containers/_ClickMe';
import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        This is your app!
        <_ClickMe />
        <Switch>
          <Route exact path='/' render={() => (
            <p>You're on the home page!</p>
          )} />
          <Route exact path='/test' render={() => (
            <p>You're on a test page!</p>
          )} />
          <Route render={() => (
            <p>Invalid path given</p>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;