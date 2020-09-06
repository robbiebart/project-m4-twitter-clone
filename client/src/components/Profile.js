import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import moment from "moment";

import { CurrentUserContext } from "./CurrentUserContext";

import ProfileFeed from "./ProfileFeed";

const Profile = () => {
  const { currentUser } = React.useContext(CurrentUserContext);

  const { profileId } = useParams();
  //   console.log(profileId, "profile ID");

  const [profile, setProfile] = React.useState({});
  const [following, setFollowing] = React.useState("");
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        setProfile(data);
        // console.log("look for this one", data);
        setStatus("idle");
        setFollowing(data.profile.isBeingFollowedByYou ? "Unfollow" : "Follow");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFollow = () => {
    fetch(`/api/${profile.handle}/follow`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        // window.location.reload(false);
        setFollowing(!following);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnfollow = () => {
    fetch(`/api/${profile.handle}/unfollow`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setFollowing(!following);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log("it fell again", profile);

  if (status === "loading") {
    return <div>loading...</div>;
  } else {
    return (
      <Wrapper>
        <Banner src={profile.profile.bannerSrc} />
        <AvatarWrapper>
          <Avatar src={profile.profile.avatarSrc} />
        </AvatarWrapper>
        <ButtonWrapper>
          {profile.profile.handle !== currentUser && (
            <>
              {profile.profile.isBeingFollowedByYou ? (
                <FollowButton onClick={handleUnfollow}>Unfollow</FollowButton>
              ) : (
                <FollowButton onClick={handleFollow}>Follow</FollowButton>
              )}
            </>
          )}
        </ButtonWrapper>
        <InfoWrapper>
          <h1>{profile.profile.displayName}</h1>
          <FollowHandle>
            <FollowsYou>@{profile.profile.handle}</FollowsYou>
            {profile.profile.isFollowingYou && <p>Follows you</p>}
          </FollowHandle>
          <h4>{profile.profile.bio}</h4>
          <Location>
            <FiMapPin />
            <div>{profile.profile.location}</div>
            <FiCalendar />
            Joined {moment(profile.profile.joined).format("MMMM YYYY")}
          </Location>
          <FollowDiv>
            <Follow>
              <strong>{profile.profile.numFollowing}</strong> Following
            </Follow>
            <Follow>
              <strong>{profile.profile.numFollowers}</strong> Followers
            </Follow>
          </FollowDiv>
        </InfoWrapper>
        <ProfileFeed />
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 600px;
  left: 200px;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  position: relative;
`;

const Banner = styled.img`
  width: 100%;
  position: relative;
`;

const AvatarWrapper = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  position: absolute;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  top: -75px;
  left: 20px;
  border: 2px solid white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0 0;
  height: 70px;
`;

const FollowButton = styled.button`
  padding: 10px 20px;
  border-radius: 25px;
  color: white;
  font-size: 20px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const InfoWrapper = styled.div`
  padding: 20px;
  h4 {
    margin-left: 10px;
    padding: 20px 0 10px;
  }
`;

const FollowHandle = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
`;

const FollowsYou = styled.p`
  background-color: lightgrey;
  padding: 4px;
  margin-left: 10px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FollowDiv = styled.div`
  margin-left: 10px;
  display: flex;
`;

const Follow = styled.p`
  margin-right: 10px;
`;
export default Profile;
