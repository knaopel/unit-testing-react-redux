import { PayloadAction } from "@reduxjs/toolkit";
import { ProfileState } from "../profileSlice";

export const deleteProfileReducer = (
  state: ProfileState,
  action: PayloadAction<number>
): void => {};
