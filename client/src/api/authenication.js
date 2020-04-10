import axios from 'axios';
export function login(username, password) {
   return axios.post('http://localhost:3005/login', {
        username,
        password
    });
};