import { createSlice } from '@reduxjs/toolkit';

type isDrawerOpen = boolean;

interface InitialState {
  isDrawerOpen: isDrawerOpen;
}

const initialState: InitialState = {
  isDrawerOpen: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    },
  },
  extraReducers: {},
});

export default drawerSlice.reducer;
export const { closeDrawer, openDrawer } = drawerSlice.actions;
