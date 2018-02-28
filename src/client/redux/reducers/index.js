import { combineReducers } from 'redux';

import users from './reducer_users';
import auth from './reducer_auth';
import stickynotes from './reducer_stickynotes';

const rootReducer = combineReducers({
  users,
  auth,
  stickynotes
});

export default rootReducer;
