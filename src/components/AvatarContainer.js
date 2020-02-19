import React, { useState, useEffect } from "react";
import { Stars } from "./Stars";
import { getUserRatings } from "../http/ratingsService";
import { getProfile } from "../http/profileService";

export function AvatarContainer({ id }) {
  const [ratings, setRatings] = useState([]);
  const [profile, setProfile] = useState({});
  console.log(id);

  const value = 2; //media de los ratings del usuario

  useEffect(() => {
    getUserRatings(id).then(response => setRatings(response.data));
    getProfile(id).then(response => setProfile(response.data[0]));
  }, []);

  const hasProfile = Object.keys(profile).length > 0;
  if (!hasProfile) {
    return <div>Loading...</div>;
  }
  console.log("ahora");
  return (
    <div id="AvatarContainer">
      <div id="avatar">
        {<img alt="Foto de avatar" src={profile.avatar_url} /> || "Loading..."}
      </div>
      <div className="avatarcontainer">
        <Stars
          nameValue="read-only"
          valor={value}
          styleprop="readOnly"
          talla="large"
        />
      </div>
      <div id="name">
        <h2>{profile.name}</h2>
      </div>
    </div>
  );
}
