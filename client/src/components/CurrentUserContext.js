import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setStatus("idle");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
/* 
you want to use a conditional with the status, if the status is idle, then i know that i'm
safe and i can access the obj and use it; this conditional happens wherever you use it, in this 
case home feed
all of the conditionals will have a if case using idle, and itll always if it isnt, display loading
if status idle, return html that uses currentUser, else return div loading div
*/
