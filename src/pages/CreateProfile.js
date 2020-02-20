import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import FileUpload from "../components/FileUpload";
import {
  getProfile,
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
    console.log(formData);
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
            <FileUpload />
          </li>
        </ul>
      </div>
      <div>
        <form className="hangout" action="#">
          <label className="label">Nombre y apellidos</label>
          <input
            value={profile.name}
            type="text"
            placeholder=" Introduce Nombre y Apellidos"
          />
          <label className="label">Edad</label>
          <input
            value={profile.age}
            type="text"
            placeholder=" Introcude tu Edad"
          />
          <label className="label">Categoría Profesional</label>
          <input
            value={profile.category}
            type="text"
            placeholder=" Introduce Categoría Profesional"
          />
          <label className="label">Puesto/Posición</label>
          <input
            value={profile.position}
            type="text"
            placeholder="Introduce tu puesto"
          />
          <label className="label">Descripción</label>
          <textarea
            value={profile.aboutMe}
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
