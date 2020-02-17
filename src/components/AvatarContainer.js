import React, { useState, useEffect } from "react";
import { Stars } from "./Stars";
import { getUserRatings } from "../http/ratingsService";
import { getProfile } from "../http/profileService";

export function AvatarContainer({ id }) {
  const [ratings, setRatings] = useState([]);
  const [profile, setProfile] = useState({});

  const value = 2; //media de los ratings del usuario

  useEffect(() => {
    getUserRatings(id).then(response => setRatings(response.data));
    getProfile(id).then(response => setProfile(response.data));
  }, []);

  const hasProfile = Object.keys(profile).length > 0;
  if (!hasProfile) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div id="avatar">
        <img alt="Foto de avatar" src={profile[0].avatar_url} />
      </div>
      <span className="span">
        <Stars
          nameValue="read-only"
          valor={value}
          styleprop="readOnly"
          talla="large"
        />
      </span>
      <div id="name">
        <h2>{profile[0].name}</h2>
      </div>
    </React.Fragment>
  );
}
