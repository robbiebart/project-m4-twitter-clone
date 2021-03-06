import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import Tweet from "./Tweet";
import styled from "styled-components";
import TweetPost from "./TweetPost";

const HomeFeed = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [tweet, setTweet] = useState(null);
  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        // console.log(typeof currentUser);
        console.log("homefeed data", data);
        setTweet(data);
      });
  }, []);
  console.log("tweet1", tweet);
  if (tweet === null) {
    return <div>loading...</div>;
  } else {
    return (
      <HomeDiv>
        <Title>Home</Title>
        <TweetPost />
        <TweetParent>
          {tweet.tweetIds.map((tweetId) => {
            console.log("tweetId", tweetId);
            return <Tweet tweet={tweet.tweetsById[tweetId]} />;
          })}
        </TweetParent>
      </HomeDiv>
    );
  }
};

const Title = styled.h1`
  margin-left: 10px;
`;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const TweetParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;

  /* border: solid 5px red; */
`;

/*
find
*/

export default HomeFeed;
