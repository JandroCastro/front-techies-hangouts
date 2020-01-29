import axios from "axios";

export function getUserRatings(id) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/rating/${id}`);
}

export function createRating(hangoutId, ratingData) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/rating/${hangoutId}`,
    ratingData
  );
}
