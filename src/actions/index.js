import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = 'https://api-dev.becollective.ly/sign-in';
const provider = 'collectively'
// LOGIN 
// patrykh@reactpoland.com
// patryk
export function signinUser ({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}`, { email, password, provider })
    .then(response => {
      dispatch({ type: AUTH_USER })
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/dashboard');
    })
    .catch(() => {
      dispatch(authError('Bad Login Info'));
    });
  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
