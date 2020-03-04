import React, { useRef, useEffect } from "react";
import { Footer } from "../components/Footer";
import iconSignin from "../img/signin.svg";
import iconAttend from "../img/attendEvent.svg";
import iconShare from "../img/share.svg";
import iconComputer from "../img/computer.svg";
import iconDrinks from "../img/drinks.svg";
import iconEvent from "../img/event.svg";
import iconAdd from "../img/add.svg";
import iconFind from "../img/findTalent.svg";
import iconStar from "../img/star.svg";
import iconEnjoy from "../img/enjoy.svg";
import video from "../img/video.mp4";

export function Home() {
  const v = useRef(null);
  useEffect(() => {
    v.current.play();
  }, []);
  return (
    <React.Fragment>
      <div className="principal">
        <section className="up">
          <video id="video" ref={v} src={video} loop />
          <div className="up-content">
            <div className="titulo">
              <h1>CONÉCTATE . INTERACTÚA</h1>
              <h1 className="titulo2">Forma parte de nuestra comunidad</h1>
              <div className="botonHome">
                <button
                  className="btn"
                  onClick={() => (window.location.href = "/principal")}
                >
                  enter
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="medium">
          <ul>
            <li>
              <h3>Si eres Recruiter</h3>
              <p>
                Conoce en persona, en un ambiente distendido, a potenciales
                candidatos para ese puesto tan crítico de tu empresa.
              </p>
            </li>
            <div></div>
            <li>
              <h3>Si buscas trabajo</h3>
              <p>
                Amplía tu red de contactos laborales y entérate de que empresas
                podrían estar buscando a alguien como tú.
              </p>
            </li>
            <div></div>
            <li>
              <h3>Quieres afterWork</h3>
              <p>
                Intercambia experiencias y ponte al día de las últimas
                tendencias, mientras te tomas algo con otros miembros de la
                comunidad Techie.
              </p>
            </li>
          </ul>
        </section>
        <div className="midpage"></div>
        <section className="down">
          <ul>
            <li>
              <p>
                <img src={iconSignin} />
                Inscríbete en Techies Hangouts.
              </p>
            </li>
            <li>
              <p>
                <img src={iconAttend} />
                Apúntate y acude a eventos de la comunidad.
              </p>
            </li>
            <li>
              <p>
                <img src={iconShare} />
                Comparte experiencias y amplía conocimientos.
              </p>
            </li>
            <li>
              <p>
                <img src={iconComputer} />
                Encuentra el trabajo que estabas esperando.
              </p>
            </li>
            <li>
              <p>
                <img src={iconDrinks} />Y por supuesto, tómate algo con tu gente
                techie.
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                <img src={iconEvent} />
                Crea tus propios eventos.
              </p>
            </li>
            <li>
              <p>
                <img src={iconAdd} />
                Selecciona a los participantes.
              </p>
            </li>
            <li>
              <p>
                <img src={iconFind} />
                Encuentra a ese talento que tu proyecto necesita.
              </p>
            </li>
            <li>
              <p>
                <img src={iconStar} />
                Valora a los demás miembros de la comunidad.
              </p>
            </li>
            <li>
              <p>
                <img src={iconEnjoy} />
                Diviértete.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </React.Fragment>
  );
}
