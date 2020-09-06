import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../constants";
import LoadingWheel from "./LoadingWheel";

const TweetPost = () => {
  const { currentUser, status, handleTweetPost, postError } = React.useContext(
    CurrentUserContext
  );

  console.log(currentUser, "current user");
  const [newTweet, setNewTweet] = React.useState("");
  const [charCount, setCharCount] = React.useState(280);
  const [disable, setDisable] = React.useState(true);
  const [countColor, setCountColor] = React.useState("d0d0d0");
  React.useEffect(() => {
    if (charCount >= 280 || charCount < 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    if (charCount < 55 && charCount > 0) {
      setCountColor("#f5c338");
    } else if (charCount <= 0) {
      setCountColor("#c904040");
    } else {
      setCountColor("#d0d0d0");
    }
  }, [charCount]);
  if (status === "idle") {
    return (
      <>
        <Input>
          <Avatar src={currentUser.profile.avatarSrc} />
          <textarea
            type="text"
            name="meow"
            placeholder="What's happening?"
            style={{ resize: "none", fontFamily: "sans-serif" }}
            onChange={(event) => {
              setNewTweet(event.target.value);
              setCharCount(280 - event.target.value.length);
            }}
          />
          <CharacterCounter style={{ color: countColor }}>
            {charCount}
          </CharacterCounter>
          <Button
            disabled={disable}
            onClick={() => {
              handleTweetPost(newTweet);
            }}
          >
            Meow
          </Button>
        </Input>
      </>
    );
  } else {
    return <LoadingWheel />;
  }
};

const Input = styled.div`
  position: relative;
  display: flex;
  border: 1px solid lightgrey;
  border-bottom: 8px solid lightgrey;
  width: 73vw;
  textarea {
    padding: 10px;
    font-size: 18px;
    outline: none;
    width: 50%;
    height: 180px;
    border: none;
    &:focus::-webkit-input-placeholder {
      color: #d0d0d0;
    }
  }
`;
const CharacterCounter = styled.p`
  position: absolute;
  top: 140px;
  right: 100px;
  margin: 10px;
  padding: 12px 18px;
  color: #d0d0d0;
`;

const Avatar = styled.img`
  padding: 8px;
  height: 50px;
  width: 50px;
  border-radius: 35px;
`;

const Button = styled.button`
  position: absolute;
  top: 135px;
  right: 5px;
  margin: 10px;
  padding: 12px 18px;
  color: white;
  font-size: 15px;
  background-color: ${COLORS.primary};
  border: none;
  border-radius: 25px;
  &:hover {
  }
  &:disabled {
    background-color: lightgrey;
  }
`;
export default TweetPost;
