import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Retweets from "./Retweets";
import TweetActions from "./TweetActions";

const Tweet = ({ tweet }) => {
  console.log("tweeeeeeet", tweet);
  return (
    <OutterTweetDiv>
      <Link to={"/tweet/" + tweet.id}>
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
          <Content>{tweet.status}</Content>
          {tweet.media.length > 0 && <Image src={tweet.media[0].url} />}
        </ContentImage>
      </Link>
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
`;

const Avatar = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;

const NameHandleDate = styled.div`
  display: flex;
  justify-content: space-around;
  h3 {
    font-weight: bold;
  }
  h4 {
    color: grey;
  }
`;

const ContentImage = styled.div`
  /* display: inline-block; */
`;

const Image = styled.img`
  /* height: 75%; */
  width: 50%;
  border-radius: 5px;
`;

const Content = styled.div`
  word-wrap: break-word;
`;

export default Tweet;
