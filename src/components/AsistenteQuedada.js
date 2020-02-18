import React, { useState, useEffect } from "react";
import { MiniAvatar } from "./MiniAvatar";
import { Stars } from "./Stars";
import { getProfile } from "../http/profileService";

export function AsistenteQuedada({ id }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile(id).then(response => setProfile(response.data));
  },[]);

  return (
    <div className="asistente">
      <ul>
        <li>
          <MiniAvatar id={id} />
        </li>
        <li>
          {profile.name} , {profile.position}
        </li>
        <li>
          <Stars />
        </li>
      </ul>
    </div>
  );
}
