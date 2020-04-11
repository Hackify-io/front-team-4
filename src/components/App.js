//Import Modules
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Import Config Files
import history from './../history';

//Import Routes
import { MAIN_APP_URL, ADMIN_MAIN_APP_URL } from './../routes';

//Import Components
import Home from './Home';
import Main from './Main';
import Admin from './Admin';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App-Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={MAIN_APP_URL} component={Main} />
            <Route path={ADMIN_MAIN_APP_URL} component={Admin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
