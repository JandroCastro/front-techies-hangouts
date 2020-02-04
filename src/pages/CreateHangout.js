import React from "react";
import { Footer } from "../components/Footer";

export function CreateHangout() {
  return (
    <React.Fragment>
      <h1>Crea tu Evento</h1>

      <div className="hangout">
        <form className="event" action="#">
          <label className="label">Título</label>
          <input type="text" placeholder="introduce un título" />
          <label className="label">Dirección</label>
          <input type="text" placeholder="introduce una dirección" />
          <label className="label">Local</label>
          <input type="text" placeholder="introduce un local" />
          <label className="label">Máxima Capacidad </label>
          <input type="text" placeholder="introduce un número" />
          <label className="label">Descripción</label>
          <textarea className="textarea" type="text" placeholder="introduce una descripción" />
        </form>
        <button type="button">CREAR</button>
      </div>

      <Footer />
    </React.Fragment>
  );
}
