import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import usersReducer from './features/users/usersSlice';
import projectReducer from './features/project/projectSlice';
import drawerReducer from './features/drawer/drawerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: usersReducer,
    project: projectReducer,
    drawer: drawerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
