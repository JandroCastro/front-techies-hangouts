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
      <h1>crea tu perfil</h1>
      <div>
        <form className="hangout" action="#">
          <label className="label">Nombre y apellidos</label>
          <input type="text" placeholder=" Introduce Nombre y Apellidos" />
          <label className="label">Edad</label>
          <input type="text" placeholder=" Introcude tu Edad" />
          <label className="label">Categoría Profesional</label>
          <input type="text" placeholder=" Introduce Categoría Profesional" />
          <label className="label">Puesto/Posición</label>
          <input type="text" placeholder="Introduce tu puesto" />
          <label className="label">Descripción</label>
          <textarea
            id="textarea"
            type="text"
            placeholder="introduce una breve descripción sobre ti"
          />
        <button onClick={()=> window.location.href="/profile"} className="boton" type="button">
          CREAR
        </button>
        </form>
      </div>

      <Footer />
    </React.Fragment>
  );
}
