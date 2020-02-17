import React from "react";
import logoLinkedin from "../img/linkedin.svg";
import aceptado from "../img/aceptado.png";
import descartado from "../img/descartado.png";
import { MiniAvatar } from "../components/MiniAvatar";
import { Stars } from "../components/Stars";

export function ProfileCards() {
  return (
    <React.Fragment>
      <article className="profilecard">
        <section className="cardavatar">
          <div>
            <MiniAvatar />
          </div>
          <div className="ratings">
            <Stars />
          </div>
        </section>
        <section className="cardinfo">
          <ul>
            <li>Name</li>
            <li>Edad</li>
            <li>Position</li>
            <li>
              <a href="https://www.linkedin.com/">
                <img src={logoLinkedin} alt="logo linkedin" />
              </a>
            </li>
          </ul>
        </section>
        <section className="buttons">
          <button onClick = {(e)=>console.log(e)}   id="aceptar">
            <img src={aceptado} alt="aceptar asistente" />
          </button>
          <button onClick = {(e)=>console.log(e)} id="descartar">
            <img src={descartado} alt="descartar asistente" />
          </button>
        </section>
      </article>
    </React.Fragment>
  );
}
