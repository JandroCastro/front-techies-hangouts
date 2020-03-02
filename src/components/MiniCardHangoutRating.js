import React from "react";
import { MiniAvatar } from "../components/MiniAvatar";

import { StarsForRating } from "./StarsForRating";
import { useHistory } from "react-router-dom";

export function MiniCardHangoutRating({ user, eventId }) {
  console.log(user);
  const { user_id } = user;
  const history = useHistory();

  return (
    <div className="miniCard">
      <ul
        onClick={() => history.push(`/profile/${user.user_id}`)}
        id="miniCard-info"
      >
        <li>
          <MiniAvatar url={user.avatar_url} />
        </li>
        <li>{user.userName}</li>
        <li>{user.position}</li>
      </ul>

      <div id="miniStars">
        <StarsForRating hangoutId={eventId} user_id={user_id} />
      </div>
    </div>
  );
}
