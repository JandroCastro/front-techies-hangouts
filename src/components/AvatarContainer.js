import React, { useState, useEffect } from "react";
import { getAvatar, getProfile } from "../http/profileService";
import { Stars } from "./Stars";
import { getUserRatings } from "../http/ratingsService";

export function AvatarContainer(user) {
  const [avatar, setAvatar] = useState("");
  const [ratings, setRatings] = useState([]);
  const [profile, setProfile] = useState({});

  const value = 2; //media de los ratings del usuario

  useEffect(() => {
    getAvatar(user.id).then(response => setAvatar(response.data));
    getUserRatings(user.id).then(response => setRatings(response.data));
    getProfile(user.id).then(response => setProfile(response.data));
  }, []);

  return (
    <React.Fragment>
      <div id="avatar">
        <img
          alt="Foto de avatar"
          src="https://static2.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG" //avatar h2 user.name
        />
      </div>
      <span className="span">
        <Stars
          nameValue="read-only"
          valor={value}
          styleprop="readOnly" //{profile.name}
          talla="large"
        />
      </span>
      <div id="name">
        <h2>El de las bicis</h2>
      </div>
    </React.Fragment>
  );
}
