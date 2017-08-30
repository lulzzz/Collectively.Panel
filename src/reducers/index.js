import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import groupsReducer from './groups_reducer'

const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  groups: groupsReducer
});

export default rootReducer;
