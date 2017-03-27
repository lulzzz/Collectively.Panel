import axios from 'axios';

const ROOT_URL = 'http://localhost:5000';

export function signinUser ({ email, password}) {
  return function(dispatch) {
    //submit email/pass to srv
    axios.post(`${ROOT_URL}/users`, { email, password })
    // if req is good ->
    // update state to indicate user is authenticated
    // SAVE tje JWT token
    // redirect to the route '/dashboard'

    // if req is bad ... -> show error
  }
}
