import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tweet = ({ tweet }) => {
  console.log("tweeeeeeet", tweet);
  return (
    <Link to={"/tweet/" + tweet.id}>
      <OutterTweetDiv>
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
          {tweet.media.length > 0 && <img src={tweet.media[0].url} />}
        </ContentImage>
      </OutterTweetDiv>
    </Link>
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

export default Tweet;
