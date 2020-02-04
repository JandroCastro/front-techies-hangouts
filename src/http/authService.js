import axios from "axios";

export function login({ email, password }) {
  // Parametro 2 - BODY de la request
  // En vuestro caso teneis que enviar el BODY en lugar de este 3 parametro con
  // la propiedad auth
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth`, null, {
    auth: {
      username: email,
      password
    }
  });
}

export function register(registerData) {
  // Si quiero enviar parametros tipo querystring puedo usar el objeto de configuracion
  // que va en el parametro numero 3
  // {
  //   params: {
  //     filter1: 'filter1',
  //     filter2: 'filter2'
  //   }
  // }
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, registerData);
}
