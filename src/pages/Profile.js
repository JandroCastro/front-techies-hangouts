import React from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { AvatarContainer } from "../components/AvatarContainer";
import { ProfileInfo } from "../components/ProfileInfo";
import { Footer } from "../components/Footer";

export function Profile() {
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
