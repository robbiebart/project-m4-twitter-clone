import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

const HomeFeed = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  return (
    <div>
      {status}
      {currentUser}
    </div>
  );
};

export default HomeFeed;
