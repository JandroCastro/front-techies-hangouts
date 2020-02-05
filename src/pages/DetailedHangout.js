import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AvatarContainer } from "../components/AvatarContainer";

export function DetailedHangout() {
  return (
    <React.Fragment>
      <Header title="YOUR PROFILE" />
      <section id="principalDeQuedada">
        <h1 style={{ marginTop: 12 }}>Cañas y copas afterwork</h1>
        <ul>
          <li id="fotoDeQuedada"></li>
          <li id="avatar">
            <AvatarContainer />
          </li>
        </ul>
        <button id="anotarse">Anotarse</button>
      </section>
      <section id="info">
        <div id="datosQuedada">
          <ul>
            <h3>Detalles</h3>
            <li>Ciudad</li>
            <li>Fecha</li>
            <li>Hora</li>
            <li>Temática</li>
            <li>Capacidad</li>
            <li>Descripción</li>
            <li>Mapa</li>
            <li>
              <button id="editar">editar quedada</button>
            </li>
          </ul>
        </div>
        <div id="detallesAsistentes">
          <ul id="confirmados">
            <h3>Confirmados</h3>
            <li>Pepe</li>
            <li>Juan</li>
            <li>Manolo</li>
          </ul>
          <ul id="pendientes">
            <h3>Pendientes</h3>
            <li>Rosaura</li>
            <li>Rosalinda</li>
            <li>RosaMari</li>
          </ul>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
