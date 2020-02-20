import React from "react";

export function NavLateral() {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  let id;
  if (storedUser === null) {
    id = undefined;
  } else {
    id = storedUser.userId;
  }

  return (
    <section className="barra">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/">
                <i className="ion-ios-settings"></i>
                <span className="">TUS EVENTOS</span>
              </a>
            </li>
            <li>
              <a href={`/profile/${id}`}>
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
        <div className="botonCrear">
          <button
            className="btn"
            onClick={() => (window.location.href = "/create/hangout")}
          >
            CREAR EVENTO
          </button>
        </div>
      </aside>
    </section>
  );
}
