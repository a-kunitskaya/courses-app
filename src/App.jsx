import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import {
	CourseInfo,
	Courses,
	CreateCourse,
	Header,
	Login,
	Registration,
} from './components';

import { mockedAuthorsList, mockedCoursesList } from './helpers';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
	axios.defaults.baseURL = 'http://localhost:4000';

	return (
		<Routes>
			<Route path='/registration' element={<Registration />} />
			<Route path='/login' element={<Login />} />
			<Route
				path='/courses/:courseId'
				element={<CourseInfo courses={mockedCoursesList} />}
			/>
			<Route
				path='/courses'
				element={
					<Courses
						coursesList={mockedCoursesList}
						authorsList={mockedAuthorsList}
					/>
				}
			/>
			<Route
				path='/courses/add'
				element={<CreateCourse authorsList={mockedAuthorsList} />}
			/>
		</Routes>
	);
}

export default App;
