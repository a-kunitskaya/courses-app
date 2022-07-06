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
import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const RENDERING_OPS = {
	CREATE_COURSE: true,
	COURSE_CARDS: false,
};

function App() {
	axios.defaults.baseURL = 'http://localhost:4000';
	const [createCourseClicked, setCreateCourseClicked] = useState(false);

	const renderConditionally = () => {
		switch (createCourseClicked) {
			case RENDERING_OPS.CREATE_COURSE:
				return <CreateCourse authorsList={mockedAuthorsList} />;
			case RENDERING_OPS.COURSE_CARDS:
				return (
					<Courses
						onCreateCourseBtnClick={onCreateCourseBtnClicked}
						coursesList={mockedCoursesList}
						authorsList={mockedAuthorsList}
					/>
				);
			default:
				console.error('Error in conditional rendering');
		}
	};

	const onCreateCourseBtnClicked = (isClicked) => {
		setCreateCourseClicked(isClicked);
	};

	const mainPage = (
		<div>
			<Header />
			<Container className='border border-primary'>
				{renderConditionally()}
			</Container>
		</div>
	);

	return (
		<Routes>
			<Route path='/' element={mainPage} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/login' element={<Login />} />
			<Route path='/courses/:courseId' element={<CourseInfo />} />
			<Route path='/courses' element={<Courses />} />
			<Route path='/courses/add' element={<CreateCourse />} />
		</Routes>
	);
}

export default App;
