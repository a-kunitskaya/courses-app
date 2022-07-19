import axios from 'axios';

export const login = (user) => axios.post('/login', user);
export const register = (user) => axios.post('/register', user);
export const getAllCourses = () => axios.get('/courses/all');
export const getAllAuthors = () => axios.get('/authors/all');
