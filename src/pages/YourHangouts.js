import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SmallCards } from "../components/SmallCards";
import { getAllUserAttendance } from "../http/attendanceService";

export function YourHangouts() {
  const [hangouts, setHangouts] = useState([]);

  const { userId } = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    getAllUserAttendance(userId).then(response => setHangouts(response.data));
  }, []);

  return (
    <React.Fragment>
      <Header title="TUS EVENTOS" />
      <main className="yourHangouts">
      <h1>Tus Eventos</h1>

      
       
        <section id="organizadas">
          <h2>Quedadas de las que eres organizador</h2>
          <ul>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
          </ul>
        </section>
        <section id="asistencias">
          <h2>Quedadas pendientes de asistir</h2>
          <ul>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
          </ul>
        </section>
        <section id="pasadas">
          <h2>Quedadas a las que has asistido</h2>
          <ul>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
            <li>
              <SmallCards />
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
