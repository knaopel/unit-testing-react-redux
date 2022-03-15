import React from "react";
import { store } from "../../../../app/store";

export const getDeleteOnClick = (profileId?: number) => (
  event: React.MouseEvent
): void => {
  if (!profileId) {
    return;
  }

  // store.dispatch(deleteProfile(profileId));
  event.stopPropagation();
};
