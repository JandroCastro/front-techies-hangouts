import React from "react";
import { MiniAvatar } from "../components/MiniAvatar";
import { StarsOnlyRead } from "./StarsOnlyRead";
import { StarsForRating } from "./StarsForRating";
import { useHistory } from "react-router-dom";

export function MiniCardHangout({ user, voting }) {
  const history = useHistory();
  console.log(user.userName, voting);
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
        {<StarsOnlyRead talla="small" id={user.user_id} /> ||
          (voting && (
            <StarsForRating
              hangoutId={user.id}
              user_id={user.id_users}
              talla=""
            />
          ))}
      </div>
    </div>
  );
}
/**
 * Aquí si le paso correctamente la lógica de qué componente pasarle,
 *  me salta el error de capitalize UI. No entiendo
 * */
