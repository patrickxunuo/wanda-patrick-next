import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface LayoutState {
  animated: boolean;
}

// Initial state
const initialState: LayoutState = {
  animated: false,
};

// Actual Slice
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAnimatedState(state, action) {
      state.animated = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.auth,
    //     };
    //   },
    // },
  },
});

export const { setAnimatedState } = layoutSlice.actions;

export const selectLayoutState = (state: AppState) => state.layout.animated;

export default layoutSlice.reducer;
