import axios from "axios";

export function checkInToHangout(hangoutId) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/attendance/${hangoutId}`
  );
}

export function acceptAttendance(hangoutId, userId) {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/attendance/accepted/${hangoutId}`,
    userId
  );
}

export function rejectAttendance(hangoutId, userId) {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/attendance/rejected/${hangoutId}`,
    userId
  );
}

export function getAcceptedAttendance(hangoutId) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/attendance/accepted/${hangoutId}`
  );
}

export function getPendingAttendance(hangoutId) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/attendance/pending/${hangoutId}`
  );
}

export function getAllUserAttendance(userId) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/attendance/${userId}`);
}
