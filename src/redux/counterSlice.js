import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: 'counter',
  initialState: {value: 1},
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    setCount: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { incrementByAmount, decrementByAmount, setCount } = countSlice.actions;
export default countSlice.reducer;