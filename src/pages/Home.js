import React from "react";
import { Footer } from "../components/Footer"

export function Home() {
  return (
    <React.Fragment>

    <section>
      <h2>
        usa esta aplicación para tratar los temas que te interesen <br/>
        compartirlos con tu comunidad, buscar trabajo y un huevo de cosas mas.
      </h2>
        <button>enter</button>
    </section>
    <section>
      <ul>
        <li>si eres recruiter</li>
        <li>si buscas trabajo</li>
        <li>si quieres afterWork</li>
      </ul>
    </section>
    <section>
      <ul>
        <li>navega</li>
        <li>conoce gente</li>
        <li>encuentra tabajo</li>
        <li>tomate un algo</li>
        <li>amplía conocimientos</li>

      </ul>
      <ul>
        <li>navega</li>
        <li>conoce gente</li>
        <li>encuentra tabajo</li>
        <li>tomate un algo</li>
        <li>amplía conocimientos</li>

      </ul>
    </section>
    <Footer/>

    </React.Fragment>
  )
}
