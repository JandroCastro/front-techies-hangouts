import React from "react";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { NavFilter } from "../components/NavFilter";
import { HangoutCards } from "../components/HangoutCards";
import { Footer } from "../components/Footer";

export function Dashboard() {
  return (
    <React.Fragment>
      <Header />
      <NavMenu />
      <main>
        <NavFilter />
        <div id="hangoutCards">
          <HangoutCards />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
