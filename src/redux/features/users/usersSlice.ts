import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import usersService from './usersService';

interface InitialState {
  loading: boolean;
  users: User[];
  error: string | undefined;
}

// interface User {
//   name: string;
//   email: string;
//   password: string;
//   company: {
//     nameCompany: string;
//     nicknameSpace: string;
//     industry: string;
//     employees: string;
//   };
//   website?: string;
// }

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const initialState: InitialState = {
  loading: false,
  users: [],
  error: '',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    return await usersService.fetchUsers();
  } catch (error: any) {
    return error;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default usersSlice.reducer;
