import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, BROWSE_GROUPS } from './types';
import config from '../config'

const ROOT_URL_CONFIG = config.apiEndPoint
const ROOT_URL = 'https://api.becollective.ly/sign-in';
const URL = 'https://api.becollective.ly/';
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

export function browseGroups() {
  return function(dispatch) {
    axios.get(`${URL}/groups`)
    .then(response => {
      dispatch({ type: BROWSE_GROUPS, payload: response.data})
    })
  }

}
