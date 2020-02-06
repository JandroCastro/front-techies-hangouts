import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { getProfile, getAvatar } from "../http/profileService";

export function CreateProfile() {
  const [profile, setProfile] = useState({});
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getProfile().then(response => setProfile(response.data));
  }, [profile]);

  useEffect(() => {
    getAvatar().then(response => setAvatar(response.data));
  }, [avatar]);

  return (
    <React.Fragment>
      <h1 className="h1" style={{marginTop: 12}}>crea tu perfil</h1>
     <div className="profile">
        <form className="crearperfil" action="#">
        <label className="label">Nombre y apellidos</label>
          <input  type="text" placeholder=" Introduce Nombre y Apellidos" required />
      <h1 className="h1" style={{ marginTop: 12 }}>
        crea tu perfil
      </h1>

      <div className="Profile">
        <form className="event" action="#">
          <label className="label">Nombre y apellidos</label>
          <input
            type="text"
            placeholder=" Introduce Nombre y Apellidos"
            required
          />
          <label className="label">Edad</label>
          <input type="text" placeholder=" Introcude tu Edad" />
          <label className="label">Categoría Profesional</label>
          <input type="text" placeholder=" Introduce Categoría Profesional" />
          <label className="label">Puesto/Posición</label>
          <input type="text" placeholder="Introduce tu puesto" />
          <label className="label">Descripción</label>
          <textarea
            className="textarea"
            type="text"
            placeholder="introduce una breve descripción sobre ti"
          />
        </form>
        <button className="boton" type="button">
          CREAR
        </button>
      </div>

      <Footer />
    </React.Fragment>
  );
}
