import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  root: authReducer,
});

export default rootReducer;
