import React, { useState, useEffect } from "react";
import { Stars } from "./Stars";
import { getUserRatings } from "../http/ratingsService";

export function AvatarContainer(props) {
  const [ratings, setRatings] = useState([]);
  const { user } = props;
  console.log(user);
  console.log(props);
  console.log(Object.keys(props));
  const value = 2; //media de los ratings del usuario

  useEffect(() => {
    getUserRatings().then(response => setRatings(response.data));
  }, []);

  return (
    <React.Fragment>
      <div id="avatar">
        <img
          alt="Foto de avatar"
          src="https://static2.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG" //user.avatar_url h2 user.name
        />
      </div>
      <span className="span">
        <Stars
          nameValue="read-only"
          valor={value}
          styleprop="readOnly" //{profile.name}
          talla="large"
        />
      </span>
      <div id="name">
        <h2>El de las bicis</h2>
      </div>
    </React.Fragment>
  );
}
