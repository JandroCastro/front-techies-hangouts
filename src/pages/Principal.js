import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { NavFilter } from "../components/NavFilter";
import { HangoutCards } from "../components/HangoutCards";
import { Footer } from "../components/Footer";
import { getAllCities, getAllThematics } from "../http/utilitiesService";
import { getAllHangouts } from "../http/hangoutsService";
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

  return (
    <React.Fragment>
      <div id="principal">
        <Header title="techies hangouts" />
        <NavFilter optionCities={cities} optionThematics={thematics} />
        <NavLateral />
        <main id="hangoutCards">
          <div>
            {/* {hangouts.map(hangout => <HangoutCards hangout={hangout}) />)} */}
            <HangoutCards />
            <HangoutCards />
            <HangoutCards />
            <HangoutCards />
            <HangoutCards />
            <HangoutCards />
            <HangoutCards />
            <HangoutCards />
            <HangoutCards />
            <HangoutCards />
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
