import axios from "axios";

export function getAllCities() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/cities`);
}

export function getAllThematics() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/thematics`);
}
