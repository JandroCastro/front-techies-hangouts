import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import {
  getProfile,
  getAvatar,
  updateProfile,
  updateAvatar
} from "../http/profileService";
import { Header } from "../components/Header";
import { useHistory } from "react-router-dom";

export function CreateProfile() {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  const userId = storedUser.id;

  const history = useHistory();

  const [profile, setProfile] = useState({});
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getProfile(userId).then(response => setProfile(response.data[0]));
    getAvatar(userId).then(response => setAvatar(response.data[0]));
  }, []);

  const handleSubmit = formData => {
    updateProfile(userId, formData)
      .then(history.push(`/profile/${userId}`))
      .catch();
  };

  return (
    <React.Fragment>
      <Header title="CREA TU PERFIL" />
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
          <button onClick={handleSubmit} className="btn" type="submit">
            CREAR
          </button>
        </form>
      </div>

      <Footer />
    </React.Fragment>
  );
}
