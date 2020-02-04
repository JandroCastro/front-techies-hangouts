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

          <button>enter</button>
        </section>
        <section className="medium">
          <ul>
            <li>si eres recruiter</li>
            <li>si buscas trabajo</li>
            <li>si quieres afterWork</li>
          </ul>
        </section>
        <section className="down">
          <ul>
            <li>navega</li>
            <li>conoce gente</li>
            <li>encuentra tabajo</li>
            <li>tomate un algo</li>
            <li>amplía conocimientos</li>
          </ul>
          <ul>
            <li>ostia</li>
            <li>ca ves</li>
            <li>puto css tabajo</li>
            <li> un algo</li>
            <li>amplía funcimrgi</li>
          </ul>
        </section>
      </div>

      <Footer />
    </React.Fragment>
  );
}
