import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "couter",
  initialState,
  reducers: {
    /**generatlly the arguments are the state, action - we dont require action here as it is not relevant */
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      } else state.value = 0;
    },
  },
});

/**export the action */
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
