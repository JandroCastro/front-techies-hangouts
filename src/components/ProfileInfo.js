import React, { useState, useEffect } from "react";
import logoFacebook from "../img/facebook.svg";
import logoTwitter from "../img/twitter.svg";
import logoInstagram from "../img/instagram.svg";
import { getProfile } from "../http/profileService";

export function ProfileInfo({ id }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile(id).then(response => setProfile(response.data));
  }, [id]);

  const hasProfile = Object.keys(profile).length > 0;
  if (!hasProfile) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <div className="infoperfil">
        <ul>
          <label>Cargo que desempeña</label>
          <li>{profile[0].position}</li>
          <label>Categoría Profesional </label>
          <li>{profile[0].category}</li>
          <label>Edad</label>
          <li>{profile[0].age}</li>
          <label>url de tu Linkedin</label>
          <li>{profile[0].link}</li>
          <label>Descripción</label>
          <li>{profile[0].aboutMe}</li>
        </ul>
      </div>
        <h2 className="enlaces">enlaces a tus redes sociales</h2>
      <div id="enlacesRRSS">
        <li>
          <a href="https://www.instagram.com/">
            <img src={logoInstagram} alt="logo insta" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <img src={logoFacebook} alt="logo facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <img src={logoTwitter} alt="logo twitter" />
          </a>
        </li>
      </div>
    </React.Fragment>
  );
}
