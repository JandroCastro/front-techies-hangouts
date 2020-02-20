import React, { useState, useEffect } from "react";
import { Stars } from "./Stars";
import { getProfile } from "../http/profileService";

export function AvatarContainer({ id }) {
  const [profile, setProfile] = useState({});
  console.log(id);

  useEffect(() => {
    getProfile(id).then(response => setProfile(response.data[0]));
  }, []);

  const hasProfile = Object.keys(profile).length > 0;
  if (!hasProfile) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div id="avatar">
        {<img alt="Foto de avatar" src={profile.avatar_url} /> || "Loading..."}
      </div>
      <span className="span">
        <Stars styleprop="readOnly" talla="large" id={id} />
      </span>
      <div id="name">
        <h2>{profile.name}</h2>
      </div>
    </React.Fragment>
  );
}
