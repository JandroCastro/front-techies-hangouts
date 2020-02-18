import axios from "axios";

export function getAllHangouts() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/hangouts`);
}

export function getOneHangout(id) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/hangouts/${id}`);
}

export function createHangout(hangoutData) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/hangouts`,
    hangoutData
  );
}

export function editOneHangout(id, hangoutData) {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/hangouts/${id}`,
    hangoutData
  );
}

export function deleteOneHangout(id) {
  return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/hangouts/${id}`);
}

export function getHangoutsFiltered({ city, thematic, date }) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/hangouts/filter?city_id${city}&thematic_id=${thematic}&event_date=${date}`
  );
}

export function getOrganizedHangouts(userId) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/hangouts/organized/${userId}`
  );
}
