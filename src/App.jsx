import 'bootstrap/dist/css/bootstrap.min.css';

import {
	CourseInfo,
	Courses,
	CourseForm,
	Login,
	PrivateRoute,
	Registration,
} from './components';

import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './i18n';
import { BASE_BACKEND_URL } from './constants';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	addCourse,
	getAllAuthors,
	getAllCourses,
	updateCourse,
} from './services';
import {
	addCourseAction,
	setCoursesAction,
	updateCourseAction,
} from './store/courses/reducer';
import { setAuthorsAction } from './store/authors/reducer';
import { ROUTES } from './routes';
import { setUser } from './store/user/reducer';

function App() {
	axios.defaults.baseURL = BASE_BACKEND_URL;
	const token = localStorage.getItem('token');

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

	const loadUser = useCallback(async () => {
		const token = localStorage.getItem('token');
		console.log('token', token);
		if (token) dispatch(setUser());
	}, []);

	useEffect(() => {
		async function fetchData() {
			await loadCourses();
			await loadAuthors();
			await loadUser();
		}
		fetchData();
	}, [dispatch]);

	const addCourseHandler = async (newCourse) => {
		console.log('in addCourseHandler');
		if (token) {
			try {
				const {
					data: { result },
				} = await addCourse(newCourse, token);
				dispatch(addCourseAction(result));
			} catch (e) {
				console.error('failed to add a course', e, newCourse);
			}
		}
	};

	const updateCourseHandler = async (courseId, course) => {
		console.log('in updateCourseHandler');
		if (token) {
			try {
				const {
					data: { result },
				} = await updateCourse(courseId, course, token);
				console.log('api result', result);
				dispatch(updateCourseAction(result));
			} catch (e) {
				console.error('failed to update a course', e, course);
			}
		}
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
			<Route element={<PrivateRoute />}>
				<Route
					path={ROUTES.CREATE_COURSE}
					element={<CourseForm onCourseAdd={addCourseHandler} />}
				/>
				<Route
					path={ROUTES.UPDATE_COURSE}
					element={
						<CourseForm
							onCourseAdd={addCourseHandler}
							onCourseUpdate={updateCourseHandler}
						/>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
