import axios from "axios";

export function getProfile(id) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/profiles/${id}`);
}

export function updateProfile(id) {
  return axios.put(`${process.env.REACT_APP_BACKEND_URL}/profiles/${id}`);
}

/**
 * Falta por hacer completamente el getAvatar
 * modificar el post por put avatar
 */

export function getAvatar(id) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/profiles/avatar/${id}`
  );
}

export function updateAvatar(id, avatar) {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/profiles/avatar/${id}`,
    avatar
  );
}
