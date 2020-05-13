import axios from 'axios';
export function login(userName, password) {
   return axios.post('http://sinkingpiratesapi-env.eba-frasjans.us-east-2.elasticbeanstalk.com/api/auth/login', {
        userName,
        password
    });
};

export function register(firstName, lastName, email, userName, password) {
    return axios.post('http://localhost:5000/api/auth/login', {
        firstName,
        lastName,
         email,
         userName,
         password
     });
 };