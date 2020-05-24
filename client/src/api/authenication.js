import axios from "axios";
export function login(userName, password) {
  return axios.post("http://localhost:44314/api/auth/login", {
    userName,
    password,
  });
}

export function register(firstName, lastName, email, userName, password) {
  return axios.post("http://localhost:44314/api/auth/login", {
    firstName,
    lastName,
    email,
    userName,
    password,
  });
}
