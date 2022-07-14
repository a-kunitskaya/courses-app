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
import { useDispatch, useSelector } from 'react-redux';
import { getAllAuthors, getAllCourses } from './services';
import { addCourseAction, setCoursesAction } from './store/courses/reducer';
import { setAuthorsAction } from './store/authors/reducer';

function App() {
	axios.defaults.baseURL = BASE_BACKEND_URL;

	const AppRoutes = {
		Registration: '/registration',
		Login: '/login',
		CourseInfo: '/courses/:courseId',
		Courses: '/courses',
		CreateCourse: '/courses/add',
	};

	const dispatch = useDispatch();

	const loadCourses = useCallback(async () => {
		try {
			const {
				data: { result },
			} = await getAllCourses();
			dispatch(setCoursesAction(result));
		} catch (err) {
			console.log('Failed to get courses', err);
		}
	}, []);

	const loadAuthors = useCallback(async () => {
		try {
			const {
				data: { result },
			} = await getAllAuthors();
			dispatch(setAuthorsAction(result));
		} catch (err) {
			console.log('Failed to get authors', err);
		}
	}, []);

	useEffect(() => {
		loadCourses();
		loadAuthors();
	}, [loadAuthors, loadCourses]);

	const addCourseHandler = (newCourse) => {
		dispatch(addCourseAction(newCourse));
	};

	return (
		<Routes>
			<Route path='*' element={<Navigate to={AppRoutes.Courses} replace />} />
			<Route path={AppRoutes.Registration} element={<Registration />} />
			<Route path={AppRoutes.Login} element={<Login />} />
			<Route path={AppRoutes.CourseInfo} element={<CourseInfo />} />
			<Route path={AppRoutes.Courses} element={<Courses />} />
			<Route
				path={AppRoutes.CreateCourse}
				element={<CreateCourse onCourseAdd={addCourseHandler} />}
			/>
		</Routes>
	);
}

export default App;
