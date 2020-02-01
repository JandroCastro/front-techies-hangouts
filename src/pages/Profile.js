import React from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { AvatarContainer } from "../components/AvatarContainer";
import { ProfileInfo } from "../components/ProfileInfo";
import { Footer } from "../components/Footer";

export function Profile() {
  return (
    <React.Fragment>
      <Header />
      <NavMenu />
      <div>
        <AvatarContainer />
        <span>Aquí el nombre</span>
        <span>Aquí una descripción pequeña</span>
      </div>
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
