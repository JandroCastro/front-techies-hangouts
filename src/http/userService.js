import axios from "axios";

const storedUser = JSON.parse(localStorage.getItem("currentUser"));

let token = (storedUser && storedUser.token) || null;

axios.interceptors.request.use(
  function(config) {
    if (
      token &&
      !(config.url.includes("/auth") || config.url.includes("/users"))
    ) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    // Si la respuesta trae un token entonces lo almaceno
    // Mi aplicación supone que mi backend envia un objeto con { token, user } siempre
    // que el usuario se identifica (Login, Registro)
    // En otra aplicación podría ser diferente
    if (response.data.token) {
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      token = response.data.token;
    }
    return response;
  },
  function(error) {
    if (error.response.status === 401 && !error.config.url.includes("/auth")) {
      localStorage.removeItem("currentUser");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export function register(userData) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, userData);
}

export function deleteUser(userData, id) {
  return axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
    userData
  );
}

export function login(userData) {
  // Parametro 2 - BODY de la request
  // En vuestro caso teneis que enviar el BODY en lugar de este 3 parametro con
  // la propiedad auth
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth`, userData);
}
