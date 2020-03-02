import React, { useState, useEffect } from "react";
import { Rating } from "@material-ui/lab";
import Box from "@material-ui/core/Box";
import { createRating, getCreatedRatings } from "../http/ratingsService";
import { useAuth } from "../context/auth-context";
import { isThisRatingMade } from "../http/usefulFunctions";

export function StarsForRating({ hangoutId, user_id }) {
  console.log(user_id);
  const [value, setValue] = useState(0);
  const [madeRatings, setMadeRatings] = useState([]);
  const [props, setProps] = useState("");

  const { currentUser } = useAuth();

  useEffect(() => {
    getCreatedRatings(currentUser.userId, hangoutId)
      .then(response => setMadeRatings(response.data))
      .catch(error => console.log(error));
  }, []);

  function handleChange(e) {
    setValue(e.target.value);
    const ratingData = {
      id_rated: user_id,
      rating: parseInt(e.target.value)
    };

    createRating(hangoutId, ratingData)
      .then(response => {
        window.location.reload();
      })
      .catch(err => console.error(err));
  }
  const votacionYaRealizada = isThisRatingMade(madeRatings, hangoutId, user_id);

  console.log(madeRatings);
  console.log(votacionYaRealizada);
  if (votacionYaRealizada !== undefined) {
    setProps("disabled");
  }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          size="large"
          onChange={handleChange}
          {...props}
        />
        {votacionYaRealizada && <span>Ya has votado a este usuario</span>}
      </Box>
    </div>
  );
}

/*
export function isThisRatingMade(madeRatings, hangoutId, user_id) {
  console.log(madeRatings, hangoutId, user_id);
  madeRatings.find(madeRatingsArray => {
    return (
      madeRatingsArray.event_id === hangoutId &&
      madeRatingsArray.id_rater === storedUser.userId &&
      madeRatingsArray.id_rated === user_id
    );
  });
}
*/
