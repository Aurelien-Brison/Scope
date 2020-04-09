import { combineReducers } from 'redux';

import recipesReducer from './recipe';
import authReducer from './auth';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  auth: authReducer,
});

export default rootReducer;
