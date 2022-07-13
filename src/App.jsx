import 'bootstrap/dist/css/bootstrap.min.css';

import {
	CourseInfo,
	Courses,
	CreateCourse,
	Login,
	Registration,
} from './components';

import { mockedAuthorsList, mockedCoursesList } from './helpers';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './i18n';
import { BASE_BACKEND_URL } from './constants';
import { useState } from 'react';

function App() {
	axios.defaults.baseURL = BASE_BACKEND_URL;

	const AppRoutes = {
		Registration: '/registration',
		Login: '/login',
		CourseInfo: '/courses/:courseId',
		Courses: '/courses',
		CreateCourse: '/courses/add',
	};

	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const addCourseHandler = (newCourse) => {
		setCourses((prevCourses) => [...prevCourses, newCourse]);
		console.log('courses', courses);
	};

	return (
		<Routes>
			<Route path='*' element={<Navigate to={AppRoutes.Courses} replace />} />
			<Route path={AppRoutes.Registration} element={<Registration />} />
			<Route path={AppRoutes.Login} element={<Login />} />
			<Route
				path={AppRoutes.CourseInfo}
				element={<CourseInfo courses={mockedCoursesList} />}
			/>
			<Route
				path={AppRoutes.Courses}
				element={
					<Courses
					// coursesList={courses}
					// authorsList={authors}
					// setAuthors={setAuthors}
					/>
				}
			/>
			<Route
				path={AppRoutes.CreateCourse}
				element={
					<CreateCourse
						authorsList={authors}
						setAuthors={setAuthors}
						onCourseAdd={addCourseHandler}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
