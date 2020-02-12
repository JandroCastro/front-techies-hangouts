import React from "react";
import { MiniCardHangout } from "../components/MiniCardHangout";

export function EventCard() {
  return (
    <React.Fragment>
      <div className="eventCard">
        <ul>
          <li>12/08/1994</li>
          <li>rodrigo rodriguez rodrigao</li>
          <li>venezuela</li>
          <li>avatares de asistentes</li>
          <li>
            <MiniCardHangout />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
