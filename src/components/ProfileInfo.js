import React, { useState, useEffect } from "react";
import logoLinkedin from "../img/linkedin.svg";
import logoFacebook from "../img/facebook.svg";
import logoTwitter from "../img/twitter.svg";
import logoInstagram from "../img/instagram.svg";
import { getProfile } from "../http/profileService";

export function ProfileInfo(id) {
  /* const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile(id).then(response => setProfile(response.data));
  });*/
  const profile = {
    age: "3",
    name: "Alejandro",
    category: "Senior Tech Leader de la ostia",
    position: "Jefazo máximo del lugar y la galaxia",
    about: "Somos tres chavales que queremos derrocar la  República",
    link: "https://github.com/JandroCastro/project-techies-hangouts"
  };

  return (
    <React.Fragment>
      <div>
        <ul className="infoperfil">
          <li>{profile.position}</li>
          <li>{profile.age}</li>
          <li>{profile.category}</li>
          <li>{profile.aboutMe}</li>
        </ul>
      </div>
      <div id="enlacesRRSS">
        <li>
          {" "}
          <a href="https://www.instagram.com/">
            <img src={logoInstagram} alt="logo insta" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <img src={logoLinkedin} alt="logo linkedin" />
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
