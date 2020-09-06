import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Retweets from "./Retweets";
import TweetActions from "./TweetActions";

const TweetDetails = () => {
  const { tweetId } = useParams();

  const [tweet, setTweet] = useState(null);
  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setTweet(data.tweetsById[tweetId]);
      });
  }, []);
  if (tweet === null) {
    return <div>loading...</div>;
  } else {
    return (
      <OutterTweetDiv>
        <Retweets tweet={tweet} />
        <UpperTweetDiv>
          <Avatar src={tweet.author.avatarSrc} alt={tweet.author.displayName} />
          <NameHandleDate>
            <h3>{tweet.author.displayName}</h3>
            <h4>@{tweet.author.handle}</h4>
            <h4>{tweet.timestamp}</h4>
          </NameHandleDate>
        </UpperTweetDiv>
        <ContentImage>
          <div>{tweet.status}</div>
          {tweet.media.length > 0 && <Image src={tweet.media[0].url} />}
        </ContentImage>
        <TweetActions
          isLiked={tweet.isLiked}
          isRetweeted={tweet.isRetweeted}
          numLikes={tweet.numLikes}
          numRetweets={tweet.numRetweets}
          retweetedBy={tweet.retweetedBy}
          tweetId={tweet.id}
        />
      </OutterTweetDiv>
    );
  }
};

const OutterTweetDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 2px lightgray;

  padding-bottom: 10px;
  margin-top: 10px;

  width: 100%;
`;

const UpperTweetDiv = styled.div`
  display: flex;

  /* border: solid 2px green; */
`;

const Avatar = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;

const NameHandleDate = styled.div`
  display: flex;
  h3 {
    font-weight: bold;
  }
  h4 {
    color: grey;
  }
`;

const ContentImage = styled.div`
  display: inline-block;
`;

const Image = styled.img`
  /* height: 75%; */
  width: 50%;
  border-radius: 5px;
`;

export default TweetDetails;

/*
1209788222324256768:
author:
avatarSrc: "/assets/diplomog-avatar.jpg"
bannerSrc: "/assets/diplomog-banner.jpeg"
bio: "Best friends with @treasurymog."
displayName: "Palmerston"
handle: "diplomog"
isBeingFollowedByYou: true
isFollowingYou: true
joined: "2016-02-02T12:00"
location: "Whitehall"
numFollowers: 1
numFollowing: 1
numLikes: 1
url: "http://fco.gov.uk"
__proto__: Object
id: "1209788222324256768"
isLiked: false
isRetweeted: false
media: [{…}]
numLikes: 0
numRetweets: 0
status: "Moggy Christmas to all!↵↵Special wishes to all my diplomats, far from home at this time of year, serving 🇬🇧 all over the 🌍."
timestamp: "2019-12-25T21:53:00+00:00"
__proto__: Object
*/
