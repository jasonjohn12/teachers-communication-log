import axios from "axios";
export function getEntriesByStudentId(studentId) {
  return axios.get(
    `http://localhost:5000/api/studentEntry/students/${studentId}`
  );
}

export function createNewEntry({ notes, contacted }, studentId) {
  return axios.post(
    `http://localhost:5000/api/studentEntry/entry/${studentId}`,
    {
      notes,
      contacted,
    }
  );
}

export function getEntryById(entryId) {
  return axios.get(`http://localhost:5000/api/studentEntry/entry/${entryId}`);
}

export function addStudentEnry(studentId, notes, contacted) {
  return axios.post(
    `http://localhost:5000/api/studentEntry/entry/${studentId}`,
    {
      contacted,
      notes,
      studentId,
    }
  );
}

export function deleteEntry(entryId) {
  return axios.delete(
    `http://localhost:5000/api/studentEntry/entry/${entryId}`,
    {
      entryId,
    }
  );
}
