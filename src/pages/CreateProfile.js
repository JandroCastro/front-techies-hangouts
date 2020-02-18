import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {
  getProfile,
  getAvatar,
  updateProfile,
  updateAvatar
} from "../http/profileService";
import { useHistory } from "react-router-dom";

export function CreateProfile() {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  const userId = storedUser.userId;

  const history = useHistory();

  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile(userId).then(response => setProfile(response.data[0]));
  }, []);

  const handleSubmit = formData => {
    updateProfile(userId, formData)
      .then(history.push(`/profile/${userId}`))
      .catch();
  };

  return (
    <React.Fragment>
      <Header title="CREA TU PERFIL" />
      <div className="avatar">
        <ul>
          <li>
            {" "}
            <img
              className="avatarProfile"
              alt="Foto de avatar"
              src={profile.avatar_url}
            />
          </li>
          <li>
            <button>
              <img
                className="editavatar"
                src="data:image/jpeg;base64,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"
                alt="editar"
              />
            </button>
          </li>
        </ul>
      </div>
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
