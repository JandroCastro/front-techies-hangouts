import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import FileUpload from "../components/FileUpload";
import { useForm } from "react-hook-form";
import {
  getProfile,
  updateProfile,
  updateAvatar
} from "../http/profileService";
import { useHistory } from "react-router-dom";

export function CreateProfile() {

  const {  register, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));


  const userId = storedUser.userId;

  const history = useHistory();

  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile(userId).then(response => setProfile(response.data[0]));
  }, []);

  const editProfile = formData => {
    console.log(formData);
    updateProfile(userId, formData)
      .then(history.push(`/profile/${userId}`))
      .catch();
  };
  const hasProfile = Object.keys(profile).length > 0;

  if (!hasProfile) {
    return <div>Loading...</div>;
  }


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
            <FileUpload required />
          </li>
        </ul>
      </div>
      <div>
        <form className="hangout" action="#" onSubmit={handleSubmit(editProfile)}>
          <label className="label">Nombre y apellidos</label>
          <input
          ref={register({
            required: "The field is mandatory"
          })}
          name="name"
            value={profile.name}
            type="text"
            placeholder=" Introduce Nombre y Apellidos"
            
          />
          <label className="label">Edad</label>
          <input
          ref={register({
            required: "The field is mandatory"
          })}
          name="age"
            value={profile.age}
            type="text"
            placeholder=" Introcude tu Edad"
            
          />
          <label className="label">Categoría Profesional</label>
          <input
          ref={register({
            required: "The field is mandatory"
          })}
          name="category"
            value={profile.category}
            type="text"
            placeholder=" Introduce Categoría Profesional"
            
          />
          <label className="label">Puesto/Posición</label>
          <input
          ref={register({
            required: "The field is mandatory"
          })}
          
          name="position"
            value={profile.position}
            type="text"
            placeholder="Introduce tu puesto"
            
          />
          <label className="label">Acceso a tu Linkedin</label>
           <input 
          ref={register({
            required: "The field is mandatory"
          })}
          //meter pattern de la url y en createhangout el pattern de la hora
          
          name="link"
            value={profile.link}
            type="text"
            placeholder="Introduce la url del linkedin"
            
          />
          <label className="label">Descripción</label>
          <textarea
          ref={register({
            required: "The field is mandatory"
          })}
          name="about"
            value={profile.about}
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
