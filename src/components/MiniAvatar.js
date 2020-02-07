import React, { useState, useEffect } from "react";
import { getAvatar } from "../http/profileService";

export function MiniAvatar(id) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getAvatar(id).then(response => setAvatar(response.data));
  });

  return (
    <React.Fragment>
      <img
        src="https://static2.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG" //{avatar}
        className="miniAvatar"
        alt="Avatar usuario"
      />
    </React.Fragment>
  );
}
