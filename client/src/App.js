import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import HomeFeed from "./components/HomeFeed";
import Bookmarks from "./components/Bookmarks";
import Notifications from "./components/Notifications";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route>
            <HomeFeed exact path="/" />
          </Route>
          <Route>
            <Notifications path="/notifications" />
          </Route>
          <Route>
            <Bookmarks path="/bookmarks" />
          </Route>
          <Route>
            <TweetDetails path="/tweet/:tweetId" />
          </Route>
          <Route>
            <Profile path="/:profileId" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
