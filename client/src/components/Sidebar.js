import React from "react";
import { ReactComponent as PicName } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Sidediv>
      <SidedivElement>
        <img src={PicName} alt="logo"></img>
      </SidedivElement>
      <SidedivElement>
        <Link to="/">Home</Link>
      </SidedivElement>
      <SidedivElement>
        <Link to="/:profileId">Profile</Link>
      </SidedivElement>
      <SidedivElement>
        <Link to="/notifications">Notifications</Link>
      </SidedivElement>
      <SidedivElement>
        <Link to="/bookmarks">Bookmarks</Link>
      </SidedivElement>
    </Sidediv>
  );
};

const Sidediv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 20vw;
  border: solid blue 5px;
`;

const SidedivElement = styled.div`
  height: 5%;
  width: 100%;
  border: solid red 3px;
`;

export default Sidebar;
