import React from "react";
import { Header } from "../components/Header";
import { AvatarContainer } from "../components/AvatarContainer";
import { ProfileInfo } from "../components/ProfileInfo";
import { Footer } from "../components/Footer";

import { useParams } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export function Profile() {
  const { id } = useParams();
  const { currentUser } = useAuth();

  return (
    <main id="profile">
      <Header title="PERFIL" />

      <AvatarContainer id={id} />
      <main>
        <div>
          <ProfileInfo id={id} />
        </div>
        {currentUser.userId === id ? (
          <button
            id="perfilbutton"
            className="ghost"
            onClick={() => (window.location.href = "/create/profile")}
          >
            Gestionar Perfil
          </button>
        ) : null}
      </main>
      <Footer />
    </main>
  );
}
