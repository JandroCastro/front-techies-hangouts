import React from "react";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <React.Fragment>
      <div className="principal">
        <section className="up">
          <div className="titulo">
            <h1>Únete</h1>
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
                candidatos para ese puesto tan crítico para tu empresa.
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
              <h3>Si quieres afterWork</h3>
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
              <img />
              <p>Inscribete en Techies Hangouts.</p>
            </li>
            <li>
              <img />
              <p>Apuntate y acude a eventos de la comunidad.</p>
            </li>
            <li>
              <img />
              <p>Comparte experiencias y amplía conocimientos.</p>
            </li>
            <li>
              <img />
              <p>Encuentra el trabajo que estabas esperando.</p>
            </li>
            <li>
              <img />
              <p>Y por supuesto, tómate algo con tu gente techie.</p>
            </li>
          </ul>
          <ul>
            <li>
              <img />
              <p>Crea tus propios eventos.</p>
            </li>
            <li>
              <img />
              <p>Selecciona a los participantes.</p>
            </li>
            <li>
              <img />
              <p>Encuentra a ese talento que necesita tu proyecto.</p>
            </li>
            <li>
              <img />
              <p>Valora a los demás miembros de la comunidad.</p>
            </li>
            <li>
              <img />
              <p>Diviértete.</p>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </React.Fragment>
  );
}
