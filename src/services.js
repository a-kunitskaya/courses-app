import axios from 'axios';

export const login = (user) => axios.post('/login', user);
export const register = (user) => axios.post('/register', user);
export const getAllCourses = () => axios.get('/courses/all');
export const getAllAuthors = () => axios.get('/authors/all');
export const getUser = (token) =>
	axios.get('/users/me', { headers: { Authorization: token } });
export const logout = (token) =>
	axios.delete('/logout', { headers: { Authorization: token } });
export const addCourse = (course, token) =>
	axios.post('/courses/add', course, { headers: { Authorization: token } });

export const deleteCourse = (courseId, token) =>
	axios.delete(`/courses/${courseId}`, { headers: { Authorization: token } });

export const addAuthor = (author, token) =>
	axios.post('/authors/add', author, { headers: { Authorization: token } });

export const updateCourse = (courseId, course, token) => {
	console.log('updating course...', courseId, course);
	return axios.put(`/courses/${courseId}`, course, {
		headers: { Authorization: token },
	});
};
