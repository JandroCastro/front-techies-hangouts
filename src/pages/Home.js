import React from "react";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <React.Fragment>
      <div className="principal">
        <section className="up">
          <div className="titulo">
            <h1>CONÉCTATE</h1>
            <h1>Interactúa</h1>
            <h1>Forma parte de nuestra comunidad</h1>
          </div>
          <div className="botonHome">
            <button
              className="btn"
              onClick={() => (window.location.href = "/login")}
            >
              enter
            </button>
          </div>
        </section>
        <section className="medium">
          <ul>
            <li>
              <h3>Si eres Recruiter</h3>
              <p>
                Conoce en persona, en un ambiente distendido, a potenciales
                candidatos para ese puesto tan crítico de  tu empresa.
              </p>
            </li>
            <li>
              <h3>Si buscas trabajo</h3>
              <p>
                Amplía tu red de contactos laborales y entérate de que empresas
                podrían estar buscando a alguien como tú.
              </p>
            </li>
            <li>
              <h3>Quieres afterWork</h3>
              <p>
                {" "}
                Intercambia experiencias y ponte al día de las últimas
                tendencias, mientras te tomas algo con otros miembros de la
                comunidad Techie.
              </p>
            </li>
          </ul>
        </section>
        <section className="down">
          <ul>
            <li>
              <p>Inscríbete en Techies Hangouts.</p>
            </li>
            <li>
              <p>Apúntate y acude a eventos de la comunidad.</p>
            </li>
            <li>
              <p>Comparte experiencias y amplía conocimientos.</p>
            </li>
            <li>
              <p>Encuentra el trabajo que estabas esperando.</p>
            </li>
            <li>
              <p>Y por supuesto, tómate algo con tu gente techie.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Crea tus propios eventos.</p>
            </li>
            <li>
              <p>Selecciona a los participantes.</p>
            </li>
            <li>
              <p>Encuentra a ese talento que necesita tu proyecto.</p>
            </li>
            <li>
              <p>Valora a los demás miembros de la comunidad.</p>
            </li>
            <li>
              <p>Diviértete.</p>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </React.Fragment>
  );
}
