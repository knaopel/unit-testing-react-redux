import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { ProfileCard } from "../../../features/profile/components/ProfileCard/ProfileCard";

const App: React.FC = () => {
  return (
    <div className="App">
      <ProfileCard />
      <div>Todo Card</div>
    </div>
  );
};

export default App;
