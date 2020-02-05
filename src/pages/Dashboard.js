import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { NavFilter } from "../components/NavFilter";
import { HangoutCards } from "../components/HangoutCards";
import { Footer } from "../components/Footer";
import { getAllCities, getAllThematics } from "../http/utilitiesService";

export function Dashboard() {
  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);

  useEffect(() => {
    getAllCities().then(response => setCities(response.data));
    console.log(cities);
  }, []);

  useEffect(() => {
    getAllThematics().then(response => setThematics(response.data));
    console.log(thematics);
  }, []);

  return (

    
    <React.Fragment>
      <Header title="techies hangouts" />
      <NavMenu />
      <main>
        <NavFilter optionCities={cities} optionThematics={thematics} />
        <div id="hangoutCards">
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
    </React.Fragment>
  );
}
