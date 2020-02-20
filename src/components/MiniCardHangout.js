import React from "react";
import { MiniAvatar } from "../components/MiniAvatar";
import { StarsOnlyRead } from "./StarsOnlyRead";
import { StarsForRating } from "./StarsForRating";

export function MiniCardHangout({ user, voting }) {
  return (
    <React.Fragment>
      <div className="miniCard">
        <ul>
          <li>
            <MiniAvatar url={user.avatar_url} />
          </li>
          <li>{user.name}</li>
          <li>{user.position}</li>
          <li>
            {<StarsOnlyRead talla="small" id={user.user_id} /> ||
              (voting && <StarsForRating talla="" />)}
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
