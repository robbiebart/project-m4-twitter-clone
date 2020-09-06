import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [currentUserProfile, setCurrentUserProfile] = React.useState({});

  const [status, setStatus] = React.useState("loading");
  const [newFeed, setNewFeed] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setStatus("idle");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTweetPost = (text) => {
    const reqs = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: text }),
    };
    fetch("/api/tweet", reqs)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setNewFeed(!newFeed);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLike = (tweetId, isLiked) => {
    const reqs = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: !isLiked }),
    };
    fetch(`/api/tweet/${tweetId}/like`, reqs)
      .then((response) => response.json())
      .then((data) => {
        setNewFeed(!newFeed);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRetweet = (tweetId, isRetweeted) => {
    const reqs = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ retweet: !isRetweeted }),
    };
    fetch(`/api/tweet/${tweetId}/retweet`, reqs)
      .then((response) => response.json())
      .then((data) => {
        setNewFeed(!newFeed);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        currentUserProfile,
        status,
        handleTweetPost,
        handleLike,
        handleRetweet,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
