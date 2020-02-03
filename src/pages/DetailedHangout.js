import React from "react";
import { Footer } from "../components/Footer";

export function DetailedHangout() {
  return (
    <React.Fragment>
      <section id="principalDeQuedada">
        <h1>Nombre de la quedada</h1>
        <ul>
          <li>Foto de la quedada</li>
          <li>Detalles del organizador</li>
        </ul>
        <button>Anotarse</button>
      </section>
      <section id="info">
        <div id="datosQuedada">
          <ul>
            <li>Ciudad</li>
            <li>Fecha</li>
            <li>Hora</li>
            <li>Temática</li>
            <li>Capacidad</li>
            <li>Descripción</li>
            <li>Mapa</li>
          </ul>
          <button>Anotarse o editar quedada</button>
        </div>
        <div id="detallesAsistentes">
          <ul>
            <ul>
              <h3>Confirmados</h3>
              <li>Pepe</li>
              <li>Juan</li>
              <li>Manolo</li>
            </ul>
            <ul>
              <h3>Pendientes</h3>
              <li>Rosaura</li>
              <li>Rosalinda</li>
              <li>RosaMari</li>
            </ul>
          </ul>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
