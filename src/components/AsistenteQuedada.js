import React from "react";
import { MiniAvatar } from "./MiniAvatar";

export function AsistenteQuedada() {
  return (
    <div className="asistente">
      <ul>
        <li>
          <MiniAvatar />
        </li>
        <li>Nombre del chaval y posicion</li>
        <li>Estrellas para puntuar</li>
      </ul>
    </div>
  );
}
