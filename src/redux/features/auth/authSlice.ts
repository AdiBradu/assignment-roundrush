import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authService from './authService';

interface User {
  name: string;
  email: string;
  password: string;
  company: {
    nameCompany: string;
    nicknameSpace: string;
    industry: string;
    employees: string;
  };
  website?: string;
}

type Email = string | null;
type Message = string;

interface Credentials {
  email: string;
  password: string;
}

interface InitialState {
  user: User | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  hasAccount: boolean | null;
  isLoggedIn: boolean | null;
}

const initialState: InitialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  hasAccount: null,
  isLoggedIn: null,
};

//Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user: User, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      const message: Message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

//Check email validity
export const checkEmailValidity = createAsyncThunk(
  'auth/checkEmailValidity',
  async (email: Email, thunkAPI) => {
    try {
      return await authService.checkEmailValidity(email);
    } catch (error: any) {
      const message: Message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials, thunkAPI) => {
    try {
      return await authService.login(credentials);
    } catch (error: any) {
      const message: Message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.user = null;
      state.message = '';
      state.hasAccount = null;
      state.isLoggedIn = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.user = null;
        state.message = '';
        state.hasAccount = null;
        state.isLoggedIn = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = '';
        state.hasAccount = true;
        state.isLoggedIn = null;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload;
        state.hasAccount = null;
        state.isLoggedIn = null;
      })
      .addCase(checkEmailValidity.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.user = null;
        state.message = '';
        state.hasAccount = null;
        state.isLoggedIn = null;
      })
      .addCase(checkEmailValidity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = null;
        state.message = '';
        state.hasAccount = action.payload;
        state.isLoggedIn = null;
      })
      .addCase(
        checkEmailValidity.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.user = null;
          state.message = action.payload;
          state.hasAccount = null;
          state.isLoggedIn = null;
        },
      )
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.user = null;
        state.message = '';
        state.hasAccount = null;
        state.isLoggedIn = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = '';
        state.hasAccount = action.payload ? true : null;
        state.isLoggedIn = action.payload ? true : null;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload;
        state.hasAccount = null;
        state.isLoggedIn = null;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
