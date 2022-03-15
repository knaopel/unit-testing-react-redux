import { createSlice } from "@reduxjs/toolkit";
import { createProfileReducer } from "./reducers/createProfileReducer";
import { deleteProfileReducer } from "./reducers/deleteProfileReducer";
import { resetReducer } from "./reducers/resetReducer";
import { setActiveProfileReducer } from "./reducers/setActiveProfileReducer";
import { updateProfileReducer } from "./reducers/updateProfileReducer";

const profileTypes = ["guest", "user", "admin"] as const;
export type ProfileType = typeof profileTypes[number];

export interface Profile {
  profileId: number;
  name?: string;
  profileType: ProfileType;
  showToDoList: boolean;
}

export interface ProfileState {
  profileList: Profile[];
  maxProfileId: number;
  profileTypes: ReadonlyArray<ProfileType>;
  activeProfileId?: number;
}

export const initialState: ProfileState = {
  profileList: [
    { profileId: 1, name: "Ben", profileType: "admin", showToDoList: true },
    { profileId: 2, name: "Sue", profileType: "user", showToDoList: false }
  ],
  maxProfileId: 2,
  profileTypes: profileTypes as ReadonlyArray<ProfileType>
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    createProfile: createProfileReducer,
    deleteProfile: deleteProfileReducer,
    updateProfile: updateProfileReducer,
    setActiveProfile: setActiveProfileReducer,
    reset: resetReducer
  }
});

export const {
  createProfile,
  deleteProfile,
  updateProfile,
  setActiveProfile,
  reset
} = profileSlice.actions;

export default profileSlice.reducer;
