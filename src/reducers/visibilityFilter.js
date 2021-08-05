import { createSlice } from "@reduxjs/toolkit";

export const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState: "All",
  reducers: {
    setVisibilityFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export default visibilityFilterSlice.reducer;
