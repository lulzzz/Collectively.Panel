import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import groupsReducer from './groups_reducer'
import organizationReducer from './organizations_reducer'
import usersReducer from './users_reducer'


const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  groups: groupsReducer,
  organizations: organizationReducer,
  users: usersReducer
});

export default rootReducer;
