//Node Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-less/semantic.less'
//Components
import App from "./components/App";
import Firebase, {FirebaseContext} from './components/firebase';

ReactDOM.render(
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </Provider>,
    document.getElementById('root')
  );
