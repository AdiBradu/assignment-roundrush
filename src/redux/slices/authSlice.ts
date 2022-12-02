import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  user: {
    credentials: {
      email: string;
      password: string;
    };
    isLoggedIn: boolean;
  };
}

interface User {
  credentials: {
    email: string;
    password: string;
  };
  isLoggedIn: boolean;
}

const initialState: InitialState = {
  user: {
    credentials: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
