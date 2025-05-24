import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
/**
 * actions are mapped to reducers so that the reducer can modify the state
 * redux follows a immmutable approach where the state is modified and copy of the state is replaced or overwritten with
 * the original state
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
