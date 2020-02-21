//##########      STARS ONLY READ    ################

/**
 *
 * @param {*} array
 *
 * @return number media de puntuación de todos los ratings que
 * le han hecho a un usuario
 */

export function mediaRatings(array) {
  const numberOfRatings = array.length;
  let counter;
  array.map(data => {
    return (counter += data.rating);
  });

  const media = counter / numberOfRatings;
  return media;
}

//##########           MY HANGOUTS ##############
/**
 *  @param array de hangouts
 *
 * @return
 * 1) array de hangouts filtradas de las que el usuario
 * registrado es el organizador
 * 2) de las que está aceptada la invitación (próximas a las que
 * asistirá)
 * 3) a las que ya ha asistido
 * 4) Todavía ni le han confirmado ni rechazado
 */
export function getHangoutsWhereUserIsOrganizator(dataArray) {
  const date = new Date().toISOString().substring(0, 10);
  return dataArray.filter(
    hangout => hangout.id_users === hangout.user_id && hangout.event_date > date
  );
}

export function getHangoutsPendientesdeAsistencia(dataArray) {
  const date = new Date().toISOString().substring(0, 10);
  return dataArray.filter(
    hangout =>
      hangout.id_users !== hangout.user_id &&
      hangout.event_date > date &&
      hangout.request_status === "accepted"
  );
}

export function getHangoutsAssisted(dataArray) {
  const date = new Date().toISOString().substring(0, 10);
  return dataArray.filter(
    hangout =>
      hangout.event_date < date && hangout.request_status === "accepted"
  );
}

export function getHangoutsPendingToConfirm(dataArray) {
  const date = new Date().toISOString().substring(0, 10);
  return dataArray.filter(
    hangout => hangout.event_date > date && hangout.request_status === "pending"
  );
}

/**
 *
 * @param {*} string =url.search del login, le cortamos el
 * "?id=" para que nos devuelva el id de la hangout para hacer
 * la inscripción y pushear al detalle de la quedada
 *
 */

export function parseSearchPath(string) {
  const hangoutId = string.slice(4);
  return hangoutId;
}

/**
 * DETAILED HANGOUT
 */

/**
 *
 * @param {*} attendaceArray
 *
 * @return {hangout} filtrado según request_status accepted o pending
 *
 * La última es para comprobar si el currentUser.userId está
 * ya anotado en esa quedada, para que no aparezcan botones de
 * anotarse o editar sino un aviso de que ya está inscrito.
 */

export function filterAcceptedRequest(attendaceArray) {
  return attendaceArray.filter(data => data.request_status === "accepted");
}

export function filterPendignRequest(attendaceArray) {
  return attendaceArray.filter(data => data.request_status === "pending");
}

export function isAlreadyAnnotated(guest_id, attendaceArray) {
  const isAlready = attendaceArray.find(
    attendaceArray => attendaceArray.user_id === guest_id
  );
  console.log(isAlready);
  if (isAlready === undefined) {
    return false;
  } else {
    return true;
  }
}
