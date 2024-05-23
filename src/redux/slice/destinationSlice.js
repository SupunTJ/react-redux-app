import { createSlice } from "@reduxjs/toolkit";
import { resetReduxApp } from "../action/actions";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Paris",
        days: 7,
        fact: "Paris is known as the 'City of Light' because it was one of the first cities in the world to have street lighting.",
      },
      {
        name: "Tokyo",
        days: 5,
        fact: "Tokyo is the most populous metropolitan area in the world with over 37 million residents.",
      },
      {
        name: "New York",
        days: 4,
        fact: "New York City was the first capital of the United States.",
      },
      {
        name: "Sydney",
        days: 6,
        fact: "Sydney is home to the Sydney Opera House, one of the most recognizable buildings in the world.",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
      // console.log(action);
    },
    resetDestination: (state, action) => {
      console.log(action);
      state.destinationSelected = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxApp, (state, action) => {
      state.destinationSelected = null;
    });
  },
});

export const destinationReducer = destinationSlice.reducer;
export const { destinationClicked, resetDestination } =
  destinationSlice.actions;

// console.log(destinationSlice.actions.resetDestination.toString());

// const destinationSlice = createSlice({
//     name: "destinations",
//     initialState: initialState(),
//     reducers: {
//         // Define your reducers here
//     }
// });

// export const { actions, reducer } = destinationSlice;
