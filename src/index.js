import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Dashboard from './components/dashboard';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
//if we have the token, consider the user to be signed in
if (token) {
  //update app state
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Signin} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="dashboard" component={RequireAuth(Dashboard)} />
    </Route>
  </Router>
  </Provider>
  , document.querySelector('.container'));
