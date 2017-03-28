import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:5000';

export function signinUser ({ email, password}) {
  return function(dispatch) {
    //submit email/pass to srv
    axios.post(`${ROOT_URL}/users`, { email, password })
    .then(response => {
      // update state to indicate user is authenticated
      dispatch({ type: AUTH_USER })
      // SAVE the JWT token
      localStorage.setItem('token', reponse.data.token);
      // redirect to the route '/dashboard'
      browserHistory.push('/dashboard');
    })
    .catch(() => {
      // if req is bad ... -> show error
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

// export function testFetchWithToken() {
//   return function(dispatch) {
//     axios.get(ROOT_URL, {
//       headers: { authorization: localStorage.getItem('token') }
//     })
//     .then(response => {
//       console.log(response);
//     });
//   }
// }
