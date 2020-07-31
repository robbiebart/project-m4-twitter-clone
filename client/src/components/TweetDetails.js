import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const TweetDetails = () => {
  const { tweetId } = useParams();
  console.log("tweetId", tweetId);
  return (
    <OutterTweetDiv>
      <UpperTweetDiv>
        <Avatar
          src={tweetId.author.avatarSrc}
          alt={tweetId.author.displayName}
        />
        <NameHandleDate>
          <h3>{tweetId.author.displayName}</h3>
          <h4>@{tweetId.author.handle}</h4>
          <h4>{tweetId.timestamp}</h4>
        </NameHandleDate>
      </UpperTweetDiv>
      <ContentImage>
        <div>{tweetId.status}</div>
        {tweetId.media.length > 0 && <img src={tweetId.media[0].url} />}
      </ContentImage>
    </OutterTweetDiv>
  );
};

const OutterTweetDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px orange;
`;

const UpperTweetDiv = styled.div`
  display: flex;

  border: solid 2px green;
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

  img {
    height: 75%;
    border-radius: 5px;
  }
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
