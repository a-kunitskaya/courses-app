import axios from 'axios';

export const login = async (user) => await axios.post('/login', user);
export const register = async (user) => await axios.post('/register', user);
export const getCourses = async () => await axios.get('/courses/all');
export const getAuthors = async () => await axios.get('/authors/all');
