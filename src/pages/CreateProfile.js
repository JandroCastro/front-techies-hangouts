import React from "react";
import { Footer } from "../components/Footer";

export function CreateProfile() {
  return (
    <span style= {{position: "relative",height: "100vh", background: "red"}}>
      <h1 style={{marginTop: 12}}>crea tu perfil</h1>

     <div className="Profile">
        <form className="event" action="#">
        <label className="label">Nombre y apellidos</label>
          <input type="text" placeholder=" Introduce Nombre y Apellidos" />
          <label className="label">Edad</label>
          <input type="text" placeholder=" Introcude tu Edad" />
          <label className="label">Categoría Profesional</label>
          <input type="text" placeholder=" Introduce Categoría Profesional" />
          <label className="label">Puesto/Posición</label>
          <input type="text" placeholder="Introduce tu puesto" />
          <label className="label">Descripción</label>
          <textarea className="textarea" type="text" placeholder="introduce una breve descripción sobre ti" />
        </form>
        <button type="button">CREAR</button>
      </div> 

      <Footer />
    </span>
  );
}
