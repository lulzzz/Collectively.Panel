import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = 'https://private-anon-608f5abe89-collectively.apiary-mock.com';
const MAIL = 'phuzarski@gmail.com'
const PASS = 'secret'
export function signinUser ({ email, password}) {
  return function(dispatch) {
    //submit email/pass to srv
    axios.post(`${ROOT_URL}/sign-in`, { email, password })
    .then(response => {
      // update state to indicate user is authenticated
      dispatch({ type: AUTH_USER })
      // SAVE the JWT token
      localStorage.setItem('token', reponse.data.token);
      // redirect to the route '/dashboard' asd123123123asdadsadsad
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
