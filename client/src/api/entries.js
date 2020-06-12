import axios from "axios";
export function getEntriesByStudentId(studentId) {
  return axios.get(
    `http://localhost:5000/api/studentEntry/students/${studentId}`
  );
}

export function createNewEntry(entry, studentId) {
  return axios.post(
    `http://localhost:5000/api/studentEntry/students/${studentId}`,
    {}
  );
}
