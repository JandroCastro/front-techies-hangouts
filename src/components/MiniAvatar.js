import React, { useState, useEffect } from "react";
import { getAvatar } from "../http/profileService";

export function MiniAvatar({ id }) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getAvatar(id).then(response => setAvatar(response.data[0]));
  }, []);

  const hasAvatar = Object.keys(avatar).length > 0;
  if (!hasAvatar) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <img
        src={avatar.avatar_url}
        className="miniAvatar"
        alt="Avatar usuario"
      />
    </React.Fragment>
  );
}
