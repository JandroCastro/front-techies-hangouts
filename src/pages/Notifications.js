import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Notifications() {
  return (
    <React.Fragment>
      <Header title="INBOX" />
      <main>
        <ul>
          <li>Mensajes</li>
          <li>Mensajes</li>
          <li>Mensajes</li>
          <li>Mensajes</li>
          <li>Mensajes</li>
          <li>Mensajes</li>
          <li>Mensajes</li>
        </ul>
      </main>
      <Footer />
    </React.Fragment>
  );
}
