import React from "react";

export function AvatarContainer() {
  return (
    <React.Fragment>
      <div id="avatar">
        <img
          alt="Foto de avatar"
          src="https://static2.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG"
        />
      </div>
      <span className="span">Estrellitas</span>
      <div id="name">
        <h2>El de las bicis</h2>
      </div>
    </React.Fragment>
  );
}
