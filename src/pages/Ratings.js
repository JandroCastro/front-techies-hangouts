import React from "react";
import { Header } from "../components/Header";
import { AvatarContainer } from "../components/AvatarContainer";
import { AsistenteQuedada } from "../components/AsistenteQuedada";
import { Footer } from "../components/Footer";

export function Ratings() {
  return (
    <React.Fragment>
      <Header />
      <section id="principalDeQuedada">
        <h1 style={{ marginTop: 12 }}>Cañas y copas afterwork</h1>
        <ul>
          <li id="fotoDeQuedada"></li>
          <li id="avatar">
            <AvatarContainer />
          </li>
        </ul>
      </section>
      <section id="listado-de-asistentes">
        <AsistenteQuedada />
        <AsistenteQuedada />
        <AsistenteQuedada />
        <AsistenteQuedada />
        <AsistenteQuedada />
      </section>
      <Footer />
    </React.Fragment>
  );
}
