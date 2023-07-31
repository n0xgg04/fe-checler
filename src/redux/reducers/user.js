import { createReducer } from "@reduxjs/toolkit";
import { setUsername } from "../actions/user";

const initialState = {
  username: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUsername, (state, action) => {
    state.username = action.payload;
  });
});

export default userReducer;
