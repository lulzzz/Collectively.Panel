import { BROWSE_GROUPS } from '../actions/types';

export default function(state = {}, action) {
  console.log('action', action)
  switch(action.type) {
    case BROWSE_GROUPS:
      return {...state, groups: action.payload };
  }
  return state;
}
