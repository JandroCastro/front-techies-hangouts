import React from "react";
import { MiniAvatar } from "../components/MiniAvatar";
import { StarsOnlyRead } from "./StarsOnlyRead";
import { StarsForRating } from "./StarsForRating";
import { useHistory } from "react-router-dom";

export function MiniCardHangout({ user, voting }) {
  const history = useHistory();

  return (
    <div
      /*onClick={history.push(`/profile/${user.user_id}`)}*/
      className="miniCard"
    >
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
  );
}
