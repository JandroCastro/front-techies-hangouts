import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { AvatarContainer } from "../components/AvatarContainer";
import { ProfileInfo } from "../components/ProfileInfo";
import { Footer } from "../components/Footer";
import { getProfile } from "../http/profileService";
import { useParams } from "react-router-dom";

export function Profile() {
  const { id } = useParams();

  const [profile, setProfile] = useState({});

  console.log(profile[0]); // quÃ© sale aquÃ­?

  useEffect(() => {
    getProfile(id).then(response => setProfile(response.data));
  }, []);

  const user = Object.assign({}, profile[0]);
  console.log(user); // quÃ© sale aquÃ­?

  return (
    <main id="profile">
      <Header title="YOUR PROFILE" />
      <NavMenu />
      <AvatarContainer user={user} />
      <main>
        <div>
          <ProfileInfo id={id} />
        </div>
        <div>
          <button
            className="ghost"
            onClick={() => (window.location.href = "/create/profile")}
          >
            Edit profile
          </button>
        </div>
      </main>
      <Footer />
    </main>
  );
}
