import 'bootstrap/dist/css/bootstrap.min.css';

import {
	CourseInfo,
	Courses,
	CreateCourse,
	Login,
	Registration,
} from './components';

import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './i18n';
import { BASE_BACKEND_URL } from './constants';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllAuthors, getAllCourses } from './services';
import { addCourseAction, setCoursesAction } from './store/courses/reducer';
import { setAuthorsAction } from './store/authors/reducer';
import { ROUTES } from './routes';

function App() {
	axios.defaults.baseURL = BASE_BACKEND_URL;

	const dispatch = useDispatch();
	const loadCourses = useCallback(async () => {
		try {
			const {
				data: { result },
			} = await getAllCourses();
			dispatch(setCoursesAction(result));
		} catch (err) {
			console.log('Failed to load courses', err);
		}
	}, []);

	const loadAuthors = useCallback(async () => {
		try {
			const {
				data: { result },
			} = await getAllAuthors();
			dispatch(setAuthorsAction(result));
		} catch (err) {
			console.log('Failed to load authors', err);
		}
	}, []);

	useEffect(() => {
		loadCourses();
		loadAuthors();
	}, []);

	const addCourseHandler = (newCourse) => {
		dispatch(addCourseAction(newCourse));
	};

	return (
		<Routes>
			<Route
				path={ROUTES.ALL}
				element={<Navigate to={ROUTES.COURSES} replace />}
			/>
			<Route path={ROUTES.REGISTRATION} element={<Registration />} />
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.COURSE_INFO} element={<CourseInfo />} />
			<Route path={ROUTES.COURSES} element={<Courses />} />
			<Route
				path={ROUTES.CREATE_COURSE}
				element={<CreateCourse onCourseAdd={addCourseHandler} />}
			/>
		</Routes>
	);
}

export default App;
