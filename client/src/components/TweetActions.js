import React from "react";
import styled from "styled-components";
import { FiHeart, FiDownload, FiMessageCircle, FiRepeat } from "react-icons/fi";
import { CurrentUserContext } from "./CurrentUserContext";
import Action from "./Action";

const TweetActions = ({
  isLiked,
  isRetweeted,
  numLikes,
  numRetweets,
  tweetId,
}) => {
  console.log(numRetweets);
  const { handleLike, handleRetweet } = React.useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <FiMessageCircle />
      </Action>
      <>
        <Action
          onClick={(ev) => {
            ev.stopPropagation();
            handleRetweet(tweetId, isRetweeted);
          }}
          color="rgb(23, 191, 99)"
          size={40}
        >
          <FiRepeat />
        </Action>
        <p>{numRetweets}</p>
      </>
      <>
        <Action
          onClick={(ev) => {
            ev.stopPropagation();
            handleLike(tweetId, isLiked);
          }}
          color="rgb(224, 36, 94)"
          size={40}
        >
          <FiHeart />
        </Action>
        <p>{numLikes}</p>
      </>
      <Action color="rgb(27, 149, 224)" size={40}>
        <FiDownload />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 48px;
  max-width: 600px;
  button {
    padding: 5px;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    color: black;
    cursor: pointer;
    &:active {
      color: inherit;
    }
  }
`;
export default TweetActions;
