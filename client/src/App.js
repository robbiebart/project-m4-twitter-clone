import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import HomeFeed from "./components/HomeFeed";
import Bookmarks from "./components/Bookmarks";
import Notifications from "./components/Notifications";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route path="/:profileId">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default App;
