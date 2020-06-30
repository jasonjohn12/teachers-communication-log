import axios from "axios";
export function getStudents() {
  return axios.get("http://localhost:5000/api/students");
}

export function getStudentById(studentId) {
  return axios.get(`http://localhost:5000/api/students/${studentId}`);
}

export function addStudent(student) {
  console.log(student);
  return axios.post("http://localhost:5000/api/students", student);
}

export function deleteStudent(studentId) {
  return axios.delete(`http://localhost:5000/api/students${studentId}`, {
    studentId,
  });
}
