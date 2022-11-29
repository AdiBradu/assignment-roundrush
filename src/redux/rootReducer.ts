import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
