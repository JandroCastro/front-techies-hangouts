import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { NavFilter } from "../components/NavFilter";
import { HangoutCards } from "../components/HangoutCards";
import { Footer } from "../components/Footer";
import { getAllCities, getAllThematics } from "../http/utilitiesService";
import { getAllHangouts } from "../http/hangoutsService";

export function Principal() {
  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);
  const [hangouts, setHangouts] = useState([]);

  useEffect(() => {
    getAllCities().then(response => setCities(response.data));
    getAllThematics().then(response => setThematics(response.data));
    getAllHangouts().then(response => setHangouts(response.data));
  }, []);

  console.log(hangouts);

  return (
    <React.Fragment>
      <Header title="techies hangouts" />
      <NavMenu />
      <main>
        <NavFilter optionCities={cities} optionThematics={thematics} />
        <div id="hangoutCards">
          {hangouts.map(hangout => (
            <HangoutCards prop={hangout} />
          ))}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
