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
 * Falta por establecer la url desde el frontend de este endpoint,
 * y otro endpoint en la que el id del usuario sea X, para que
 * se puedan obtener las quedadas de las que eres organizador.
 *
 * Obtener quedadas en las que apareces como asistente, para listarlas
 * en yourhangouts
 */

export function getHangoutsFiltered(id) {
  return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/hangouts/${id}`);
}
