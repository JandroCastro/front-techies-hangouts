import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { AvatarContainer } from "../components/AvatarContainer";
import { ProfileInfo } from "../components/ProfileInfo";
import { Footer } from "../components/Footer";
import { getProfile, getAvatar } from "../http/profileService";
import { getUserRatings } from "../http/ratingsService";

export function Profile() {
  const { userId } = JSON.parse(localStorage.getItem("currentUser"));

  const [profile, setProfile] = useState({});
  const [avatar, setAvatar] = useState("");
  const [ratings, setRating] = useState([]);

  useEffect(() => {
    getProfile(userId).then(response => setProfile(response.data));
    getAvatar(userId).then(response => setAvatar(response.data));
    getUserRatings(userId).then(response => setRating(response.data));
  }, []);

  return (
    <main id="profile">
      <Header title="YOUR PROFILE" />
      <NavMenu />
      <AvatarContainer />
      <main>
        <div>
          <ProfileInfo />
        </div>
        <div>
          <button>Edit profile</button>
        </div>
      </main>
      <Footer />
    </main>
  );
}
