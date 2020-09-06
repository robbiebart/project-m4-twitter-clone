import React from "react";
import styled from "styled-components";
import { FiRepeat } from "react-icons/fi";

const Retweets = ({ tweet }) => {
  if (tweet.retweetFrom) {
    return (
      <Retweet>
        <FiRepeat />
        <p>{tweet.retweetFrom.displayName} Remeowed</p>
      </Retweet>
    );
  } else {
    return <div></div>;
  }
};

export default Retweets;

const Retweet = styled.div`
  display: flex;
  svg,
  p {
    color: grey;
    font-size: 14px;
  }
  svg {
    padding: 10px 5px 5px 45px;
  }
  p {
    padding: 10px 0px 5px;
  }
`;
