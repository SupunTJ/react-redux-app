import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice";

export const store = configureStore({
  reducer: {
    //next
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});

console.log(store.getState());

// store.dispatch({
//   type: "counter/increment",
// });

// console.log(store.getState());
