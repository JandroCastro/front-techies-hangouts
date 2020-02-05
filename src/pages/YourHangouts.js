import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function YourHangouts() {
  return (
    <React.Fragment>
      <Header />
      <h1 style={{marginTop: 12}}>Tus Eventos</h1>
      <section id="organizadas">
        <h2>Quedadas de las que eres organizador</h2>
        <ul>
          <li>Cards más basicas que Dashboard</li>
        </ul>
      </section>
      <section id="asistencias">
        <h2>Quedadas pendientes de asistir</h2>
        <ul>
          <li>Cards más basicas que Dashboard</li>
        </ul>
      </section>
      <section id="pasadas">
        <h2>Quedadas a las que has asistido</h2>
        <ul>
          <li>Cards más basicas que Dashboard</li>
        </ul>
      </section>
      <Footer />
    </React.Fragment>
  );
}
