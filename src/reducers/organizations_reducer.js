import { BROWSE_ORGANIZATIONS } from '../actions/types';

export default function(state = {}, action) {
  console.log('action', action)
  switch(action.type) {
    case BROWSE_ORGANIZATIONS:
      return {...state, organizations: action.payload };
  }
  return state;
}
