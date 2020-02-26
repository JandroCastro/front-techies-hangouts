import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import FileUpload from "../components/FileUpload";
import { useForm } from "react-hook-form";
import {
  getProfile,
  updateProfile,
  updateAvatar,
  getColleges
} from "../http/profileService";
import { useHistory } from "react-router-dom";

export function CreateProfile() {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const userId = storedUser.userId;
  const date = new Date().toISOString().substring(0, 10);

  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur"
  });

  const [profile, setProfile] = useState({
    user_id: null,
    age: null,
    name: null,
    category: null,
    position: null,
    aboutMe: null,
    university_id:null,
    link_url: null,
    updated_at: null
  });

  const [avatar, setAvatar] = useState("");
  const [colleges, setColleges] = useState([]);

  const onChangeAvatar = formData => {
    updateAvatar({ id: profile.user_id, avatar: formData }).then(function(
      response
    ) {
      setAvatar(response.headers.Location);
      window.location.reload();
    });
  };

  useEffect(() => {
    getProfile(userId)
      .then(response => {
        setAvatar(response.data[0].avatar_url);
        setProfile(response.data[0]);
      })
      .catch();
    getColleges()
      .then(response => response.json())
      .then(myJson => setColleges(myJson.features));
  }, [userId]);

  const editProfile = profile => {
    updateProfile(userId, profile)
      .then(history.push(`/profile/${userId}`))
      .catch();
  };

  const handleAvatar = file => {
    console.log(file);
    updateAvatar(userId, file).then();
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
            <img className="avatarProfile" alt="Foto de avatar" src={avatar} />
          </li>
          <li>
            <FileUpload onAvatarSelected={onChangeAvatar} required />
          </li>
          <li>
            <button onSubmit={handleAvatar} type="submit" className="btn">
              Actualiza avatar
            </button>
          </li>
        </ul>
      </div>
      <div>
        <form
          className="hangout"
          action="#"
          onSubmit={handleSubmit(editProfile)}
        >
          <label className="label">Nombre y apellidos</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="name"
            value={profile.name}
            type="text"
            placeholder=" Introduce Nombre y Apellidos"
            onChange={e =>
              setProfile({
                ...profile,
                name: e.target.value,
                updated_at: date
              })
            }
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
            onChange={e =>
              setProfile({
                ...profile,
                age: e.target.value,
                updated_at: date
              })
            }
          />
          <label className="label">Escoge tu universidad</label>
          <select ref={register({
              required: "The field is mandatory"
            })}
           name="university_id">
            {colleges.map(uni => {
              return (
                <option
                  key={uni.attributes.OBJECTID}
                  value={uni.attributes.Texto}
                >
                  {uni.attributes.Texto}
                  
                </option>
              );
            })}
          </select>
          <label className="label">Categoría Profesional</label>
          <input
            ref={register({
              required: "The field is mandatory",
              minLength: {
                value: 6,
                message: "You should enter a text with at least 6 characters"
              }
            })}
            name="category"
            value={profile.category}
            type="text"
            placeholder=" Introduce Categoría Profesional"
            onChange={e =>
              setProfile({
                ...profile,
                category: e.target.value,
                updated_at: date
              })
            }
          />
          {errors.category && (
            <span className="errorMessage">{errors.category.message}</span>
          )}
          <label className="label">Puesto/Posición</label>
          <input
            ref={register({
              required: "The field is mandatory",
              minLength: {
                value: 6,
                message: "You should enter a text with at least 6 characters"
              }
            })}
            name="position"
            value={profile.position}
            type="text"
            placeholder="Introduce tu puesto"
            onChange={e =>
              setProfile({
                ...profile,
                position: e.target.value,
                updated_at: date
              })
            }
          />
          {errors.position && (
            <span className="errorMessage">{errors.position.message}</span>
          )}
          <label className="label">Acceso a tu Linkedin</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            //meter pattern de la url y en createhangout el pattern de la hora

            name="link_url"
            value={profile.link_url}
            type="text"
            placeholder="Introduce la url del linkedin"
            onChange={e =>
              setProfile({
                ...profile,
                link_url: e.target.value,
                updated_at: date
              })
            }
          />
          <label className="label">Descripción</label>
          <textarea
            ref={register({
              required: "The field is mandatory"
            })}
            name="about"
            value={profile.aboutMe}
            id="textarea"
            type="text"
            placeholder="introduce una breve descripción sobre ti"
            onChange={e =>
              setProfile({
                ...profile,
                about: e.target.value,
                updated_at: date
              })
            }
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
