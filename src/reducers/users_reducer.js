import { BROWSE_USERS } from '../actions/types';

export default function(state = {}, action) {
  console.log('action', action)
  switch(action.type) {
    case BROWSE_USERS:
      return {...state, users: action.payload };
  }
  return state;
}
