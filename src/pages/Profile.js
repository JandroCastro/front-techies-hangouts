import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { AvatarContainer } from "../components/AvatarContainer";
import { ProfileInfo } from "../components/ProfileInfo";
import { Footer } from "../components/Footer";
import { getProfile, getAvatar } from "../http/profileService";

export function Profile() {
  const id = "un numero que no sé de donde cojones se saca, bro";

  const [profile, setProfile] = useState({});
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getProfile(id).then(response => setProfile(response.data));
  }, [profile]);

  useEffect(() => {
    getAvatar(id).then(response => setAvatar(response.data));
  }, [avatar]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
