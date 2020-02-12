import React from "react";

export function NavLateral() {
  return (
    <section className="barra">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/create/hangout">
                <i className="ion-bag"></i> <span>CREAR EVENTO</span>
              </a>
            </li>
            <li>
              <a href="/hangout">
                <i className="ion-ios-settings"></i>{" "}
                <span className="">TUS EVENTOS</span>
              </a>
            </li>
            <li>
              <a href="/profile">
                <i className="ion-ios-briefcase-outline"></i>{" "}
                <span className="">PERFIL</span>
              </a>
              <ul className="nav-flyout">
                <li>
                  <a href="/notifications">
                    <i className="ion-ios-navigate-outline"></i>NOTIFICACIONES
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/ratings">
                <i className="ion-ios-analytics-outline"></i>{" "}
                <span className="">PUNTUACIONES</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-paper-outline"></i>{" "}
                <span className="">ENLACES A REDES SOCIALES</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-navigate-outline"></i>{" "}
                <span className="">OPCIONES</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-medical-outline"></i>{" "}
                <span className="">CONTACTANOS</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
}
