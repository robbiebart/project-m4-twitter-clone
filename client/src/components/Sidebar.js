import React, { useContext } from "react";
import { ReactComponent as PurpleCat } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { bookmark } from "react-icons-kit/feather/bookmark";
import { home } from "react-icons-kit/feather/home";
import { user } from "react-icons-kit/feather/user";
import { bell } from "react-icons-kit/feather/bell";
import { CurrentUserContext } from "./CurrentUserContext";
import GlobalStyle from "./GlobalStyle";

const Sidebar = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  console.log("currentUser", currentUser);
  if (status === "idle") {
    return (
      <Sidediv>
        <div>
          <PurpleCat />
        </div>
        <SidedivElement>
          <Link to="/">
            <StyledIcon>
              <Icon size={25} icon={home} />
              <p>Home</p>
            </StyledIcon>
          </Link>
        </SidedivElement>
        <SidedivElement>
          <Link to={`/${currentUser.profile.handle}`}>
            <StyledIcon>
              <Icon size={25} icon={user} />
              <p>Profile</p>
            </StyledIcon>
          </Link>
          {/* this will be squiggly*/}
        </SidedivElement>
        <SidedivElement>
          <Link to="/notifications">
            <StyledIcon>
              <Icon size={25} icon={bell} />
              <p>Notifications</p>
            </StyledIcon>
          </Link>
        </SidedivElement>
        <SidedivElement>
          <Link to="/bookmarks">
            <StyledIcon>
              <Icon size={25} icon={bookmark} />
              <p>Bookmarks</p>
            </StyledIcon>
          </Link>
        </SidedivElement>
      </Sidediv>
    );
  } else {
    return <></>;
  }
};

const Sidediv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 20vw;
  border-right: solid lightgray 2px;
  margin: 0px 15px;
`;

const SidedivElement = styled.div`
  height: 5%;
  width: 100%;
  /* border: solid red 3px; */
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: solid 5px green; */
  height: 100%;
  width: 100%;

  p {
    font-size: 20px;
    margin: 0px 30px 0px 30px;
  }
`;

export default Sidebar;
