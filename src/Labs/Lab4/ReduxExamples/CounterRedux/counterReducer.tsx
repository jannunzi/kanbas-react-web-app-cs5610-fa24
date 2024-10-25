import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 234,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

// (s1) --e1--> (s2)
// (state.count) --increment--> (state.count + 1)
// (state.count) --decrement--> (state.count - 1)
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
