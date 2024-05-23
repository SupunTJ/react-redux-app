import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReduxApp } from "../action/actions";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // we will define all actions
    increment: (state) => {
      state.count += 1; // state of this slice
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    // resetCounter: (state) => {
    //   state.count = 10;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxApp, (state, action) => {
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  // resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
