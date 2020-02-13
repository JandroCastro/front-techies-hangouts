import React from "react";
import { MiniAvatar } from "../components/MiniAvatar";
import { Stars } from "./Stars";

export function MiniCardHangout({ user, onlyRead }) {
  const media = 4;
  return (
    <React.Fragment>
      <div className="miniCard">
        <ul>
          <li>
            <MiniAvatar id={user.id} />
          </li>
          <li>{user.name}</li>
          <li>{user.position}</li>
          <Stars
            talla="small"
            nameValue={
              (onlyRead && "read-only") || (!onlyRead && "simple-controlled")
            }
            valor={(onlyRead && { media }) || (!onlyRead && 0)}
            styleprop={
              (onlyRead && "read-only")
            }
          />
        </ul>
      </div>
    </React.Fragment>
  );
}
