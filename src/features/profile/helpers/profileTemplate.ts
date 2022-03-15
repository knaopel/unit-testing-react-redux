import { Profile } from "../profileSlice";
import { WithOptional, WithRequired } from "../../../utils/types";
export type ProfileTemplateFields = "showToDoList" | "profileType";

export type EmptyProfile = WithRequired<Profile, ProfileTemplateFields>;

export const emptyProfile: EmptyProfile = {
  profileType: "guest",
  showToDoList: false
};

export type PartialProfile = WithOptional<
  Omit<Profile, "profileId">,
  ProfileTemplateFields
>;
