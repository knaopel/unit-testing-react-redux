import React from "react";
import { useSelector } from "react-redux";

import { profileListSelector } from "../../selectors/profileListSelector";

export const ProfileCard: React.FC = () => {
  const profileList = useSelector(profileListSelector);
  return (
    <div className="card" role="main" aria-label="Profile Card">
      <div className="card-header">
        <h5 className="card-title">Profiles</h5>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {profileList.map((profile) => (
            <li key={profile.profileId}>Profile Item</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
