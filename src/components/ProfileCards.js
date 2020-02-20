import React, { useState, useEffect } from "react";
import logoLinkedin from "../img/linkedin.svg";
import aceptado from "../img/aceptado.png";
import descartado from "../img/descartado.png";
import { MiniAvatar } from "../components/MiniAvatar";
import { Stars } from "../components/Stars";
import { getProfile } from "../http/profileService";
import { acceptAttendance, rejectAttendance } from "../http/attendanceService";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";

export function ProfileCards({ id, manageAttendance }) {
  const hangoutId = useParams();
  const history = useHistory();

  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile(id).then(response => setProfile(response.data[0]));
  }, []);

  const handleAccept = () => {
    return acceptAttendance(hangoutId, id)
      .then()
      .catch();
  };

  const handleReject = () => {
    return rejectAttendance(hangoutId, id)
      .then()
      .catch();
  };

  const hasProfile = Object.keys(profile).length > 0;
  if (!hasProfile) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <article className="profilecard">
        <section className="cardavatar">
          <div>
            <MiniAvatar id={id} />
          </div>
        </section>
        <section className="cardinfo">
          <ul>
            <li>{profile.name}</li>
            <li>{profile.age}</li>
            <li>{profile.position}</li>
            <li>
              <a href={profile.link_url}>

                <img src={logoLinkedin} alt="logo linkedin" />
              </a>
            </li>
          </ul>
        </section>

        <div className="ratings">
          <Stars size="small" id={id} styleprop="readOnly" />
        </div>

        {manageAttendance && (
          <section className="buttons">
            <button id="aceptar" onClick={handleAccept}>
              <img src={aceptado} alt="aceptar asistente" />
            </button>
            <button onClick={handleReject} id="descartar">
              <img src={descartado} alt="descartar asistente" />
            </button>
          </section>
        )}
      </article>
    </React.Fragment>
  );
}
