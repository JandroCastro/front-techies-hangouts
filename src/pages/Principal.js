import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { NavFilter } from "../components/NavFilter";
import { HangoutCards } from "../components/HangoutCards";
import { Footer } from "../components/Footer";
import { getAllCities, getAllThematics } from "../http/utilitiesService";
import { getAllHangouts } from "../http/hangoutsService";
import { NavLateral } from "../components/NavLateral";
import { useHistory } from "react-router-dom";

export function Principal() {
  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);
  const [hangouts, setHangouts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAllCities().then(response => setCities(response.data));
    getAllThematics().then(response => setThematics(response.data));
    getAllHangouts().then(response => setHangouts(response.data));
  }, []);

  return (
    <React.Fragment>
      <div id="principal">
        <Header title="techies hangouts" />
        <NavFilter optionCities={cities} optionThematics={thematics} />
        <NavLateral />
        <main id="hangoutCards">
          <ul>
            {hangouts.map(hangout => (
              <li>
<<<<<<< HEAD
              <HangoutCards event={hangout} />
=======
                <HangoutCards
                  // onClick={history.push(`/hangout/${hangout.id}`)}
                  event={hangout}
                />
>>>>>>> 7b37f5eced338871a0573307836d4f7317e27571
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
