import { PayloadAction } from "@reduxjs/toolkit";
import { WithRequired } from "../../../utils/types";
import { Profile, ProfileState } from "../profileSlice";

export const updateProfileReducer = (
  state: ProfileState,
  action: PayloadAction<WithRequired<Profile, "profileId">>
): void => {};
