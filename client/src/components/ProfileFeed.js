import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Error from "./Error";

import Tweet from "./Tweet";
import LoadingWheel from "./LoadingWheel";

const ProfileFeed = () => {
  const [profileFeed, setProfileFeed] = useState(null);
  const [error, setError] = useState(false);
  const { profileId } = useParams();
  console.log(profileId);

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => {
        setProfileFeed(data);
        console.log("data!!!!", data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [profileId]);
  console.log("profileId right before feed", profileId);
  console.log("profile feed", profileFeed);

  if (error === true) {
    return <Error />;
  }

  if (profileFeed !== null) {
    return (
      <div>
        {profileFeed.tweetIds.map((tweetId) => {
          const tweet = profileFeed.tweetsById[tweetId];
          return <Tweet key={tweetId} tweet={tweet} />;
        })}
      </div>
    );
  } else {
    return <LoadingWheel />;
  }
};

export default ProfileFeed;
