//Import Modules
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

//Import Config Files
import store from './../store';
import history from './../history';

//Import Routes
import { MAIN_APP_URL, LOGIN_URL } from './../routes';

//Import Components
import Main from './Main';
import LoginForm from './Auth/LoginForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App-Main">
            <Switch>
              <Route exact path={MAIN_APP_URL} component={Main} />
              <Route exact path={LOGIN_URL} component={LoginForm} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
