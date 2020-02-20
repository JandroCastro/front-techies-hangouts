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
    counter += data.rating;
  });

  const media = counter / numberOfRatings;
  return media;
}

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
