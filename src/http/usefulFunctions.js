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
