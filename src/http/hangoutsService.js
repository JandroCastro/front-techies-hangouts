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
/**
 *
 * Falta por establecer la url desde el frontend de este endpoint.
 *
 * Obtener quedadas en las que apareces como asistente, para listarlas
 * en yourhangouts. JOIN ATTENDANCE-EVENTS where id_users? and request_status = accepted??????
 * aunque ahi tambien me aparecen
 * los eventos de los que eres organizador. Modifico la base de datos o filtro en el frontend?
 */
export function getHangoutsFiltered(cityId, thematicId) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/hangouts/filter?city_id${cityId}&thematic_id=${thematicId}`
  );
}

export function getOrganizedHangouts(userId) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/hangouts/organized/${userId}`
  );
}
