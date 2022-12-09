import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import projectService from './projectService';
//Types
import { User } from '../../../types/types';

type Message = string;

interface InitialState {
  user: User | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const initialState: InitialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Register user
export const fetchProject = createAsyncThunk(
  'project/fetchProject',
  async (id: number, thunkAPI) => {
    try {
      return await projectService.setProject(id);
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

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.user = null;
        state.message = '';
      })
      .addCase(fetchProject.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = '';
      })
      .addCase(fetchProject.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload;
      });
  },
});

export default projectSlice.reducer;
