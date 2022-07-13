import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const numberAction = createSlice({
  name: "data",
  initialState,
  reducers: {
    change: (state, action) => {
      state.number = action.payload + 1;
    },
  },
});

export const {change} = numberAction.actions;
export const getNumber = (state) => state.numberAction.number;

export default numberAction.reducer