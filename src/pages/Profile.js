import React from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { AvatarContainer } from "../components/AvatarContainer";
import { ProfileInfo } from "../components/ProfileInfo";
import { Footer } from "../components/Footer";

import { useParams } from "react-router-dom";

export function Profile() {
  const { id } = useParams();

  return (
    <main id="profile">
      <Header title="YOUR PROFILE" />
      <NavMenu />
      <AvatarContainer id={id} />
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
