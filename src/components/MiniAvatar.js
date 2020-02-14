import React, { useState, useEffect } from "react";
import { getAvatar } from "../http/profileService";

export function MiniAvatar(id) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getAvatar(id).then(response => setAvatar(response.data));
  });

  return (
    <React.Fragment>
      <img src={avatar} className="miniAvatar" alt="Avatar usuario" />
    </React.Fragment>
  );
}
