import React, { useState, useEffect } from "react";
import logoLinkedin from "../img/linkedin.svg";
import aceptado from "../img/aceptado.png";
import descartado from "../img/descartado.png";
import { MiniAvatar } from "../components/MiniAvatar";
import { acceptAttendance, rejectAttendance } from "../http/attendanceService";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";
import { StarsOnlyRead } from "./StarsOnlyRead";

export function ProfileCards({ profile, manageAttendance }) {
  const hangoutId = useParams();
  const history = useHistory();

  const handleAccept = () => {
    return acceptAttendance(hangoutId, profile.user_id)
      .then()
      .catch();
  };

  const handleReject = () => {
    return rejectAttendance(hangoutId, profile.user_id)
      .then()
      .catch();
  };

  return (
    <React.Fragment>
      <article className="profilecard">
        <section className="cardavatar">
          <div>
            <MiniAvatar url={profile.avatar_url} />
          </div>
        </section>
        <section className="cardinfo">
          <ul>
            <li>{profile.userName}</li>
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
          <StarsOnlyRead size="" id={profile.user_id} />
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
