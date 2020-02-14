import axios from "axios";

export function getProfile(id) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/profiles/${id}`);
}

export function updateProfile(id, profileData) {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/profiles/${id}`,
    profileData
  );
}

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
