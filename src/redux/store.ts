import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import usersReducer from './features/users/usersSlice';
import projectReducer from './features/project/projectSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: usersReducer,
    project: projectReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
