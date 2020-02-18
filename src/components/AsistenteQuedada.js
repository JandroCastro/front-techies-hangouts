import React, { useState, useEffect } from "react";
import { MiniAvatar } from "./MiniAvatar";
import { Stars } from "./Stars";
import { getProfile } from "../http/profileService";

export function AsistenteQuedada({ id }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
<<<<<<< HEAD
    getProfile(id).then(response => setProfile(response.data));
  },[]);
=======
    getProfile(id).then(response => setProfile(response.data[0]));
  }, []);

  const hasProfile = Object.keys(profile).length > 0;
  if (!hasProfile) {
    return <div>Loading...</div>;
  }
>>>>>>> 7b37f5eced338871a0573307836d4f7317e27571

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
