import React, { useState, useEffect } from "react";
import { getAvatar } from "../http/profileService";
import { Stars } from "./Stars";

export function AvatarContainer(user) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getAvatar(user.id).then(response => setAvatar(response.data));
  });

  return (
    <React.Fragment>
      <div id="avatar">
        <img
          alt="Foto de avatar"
          src="https://static2.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG" //avatar h2 user.name
        />
      </div>
      <span className="span">
        <Stars />
      </span>
      <div id="name">
        <h2>El de las bicis</h2>
      </div>
    </React.Fragment>
  );
}
