import { emptyProfile } from "../helpers/profileTemplate";
import { ProfileState } from "../profileSlice";

export const createProfileReducer = (state: ProfileState): void => {
  const profileId = ++state.maxProfileId;
  state.profileList.push({
    ...emptyProfile,
    profileId
  });
  state.activeProfileId = profileId;
};
