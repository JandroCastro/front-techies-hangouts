import React from "react";
import { MiniAvatar } from "./MiniAvatar";
import { Stars } from "./Stars";

export function AsistenteQuedada() {
  return (
    <div className="asistente">
      <ul>
        <li>
          <MiniAvatar />
        </li>
        <li>Nombre del chaval y posicion</li>
        <li>
          <Stars />
        </li>
      </ul>
    </div>
  );
}
