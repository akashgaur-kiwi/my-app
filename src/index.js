import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router';
import { store, history } from './store';

import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Provider store={store}>
  <App/>
    {/* <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router> */}
  </Provider>
), document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
