import { createReducer } from "@reduxjs/toolkit";
import { SET_THEME } from "../actions/system";

const initialState = {
  theme: "default",
};

const SystemReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_THEME, (state, action) => {
    state.example = action.payload;
  });
});

export default SystemReducer;
