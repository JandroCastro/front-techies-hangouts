import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { NavFilter } from "../components/NavFilter";
import { HangoutCards } from "../components/HangoutCards";
import { Footer } from "../components/Footer";
import { getAllCities, getAllThematics } from "../http/utilitiesService";
import { getAllHangouts, getHangoutsFiltered } from "../http/hangoutsService";
import { NavLateral } from "../components/NavLateral";

export function Principal() {
  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);
  const [hangouts, setHangouts] = useState([]);

  useEffect(() => {
    getAllCities().then(response => setCities(response.data));
    getAllThematics().then(response => setThematics(response.data));
    getAllHangouts().then(response => setHangouts(response.data));
  }, []);

  const handleFilter = filters => {
    getHangoutsFiltered(filters).then(response => setHangouts(response.data));
  };

  return (
    <React.Fragment>
      <div id="principal">
        <Header title="techies hangouts" />
        <NavFilter
          optionCities={cities}
          optionThematics={thematics}
          onFilter={handleFilter}
        />
        <NavLateral />
        <main id="hangoutCards">
          <ul>
            {hangouts.map(hangout => (
              <li key={hangout.id}>
                <HangoutCards event={hangout} />
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
