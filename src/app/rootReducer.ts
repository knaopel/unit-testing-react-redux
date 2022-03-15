import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice";

const rootReducer = combineReducers({
  profile: profileReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
