import { PayloadAction } from "@reduxjs/toolkit";
import { initialState, ProfileState } from "../profileSlice";

export const resetReducer = (
  _state: ProfileState,
  _action: PayloadAction
): ProfileState => initialState;
