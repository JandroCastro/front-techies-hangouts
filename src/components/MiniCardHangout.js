import React from "react";
import { MiniAvatar } from "../components/MiniAvatar";
import { StarsOnlyRead } from "./StarsOnlyRead";
import { StarsForRating } from "./StarsForRating";

export function MiniCardHangout({ user, voting }) {
  return (
    <React.Fragment>
      <div className="miniCard">
        <ul id="miniCard-info">
          <li>
            <MiniAvatar url={user.avatar_url} />
          </li>
          <li>{user.name}</li>
          <li>{user.position}</li>
          <li>
            {<StarsOnlyRead talla="small" id={user.user_id} /> ||
              (voting && (
                <StarsForRating
                  hangoutId={user.id}
                  user_id={user.id_users}
                  talla=""
                />
              ))}
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
