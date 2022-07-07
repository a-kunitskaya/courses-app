import { useState } from 'react';

import { CourseCardsList, SearchBar } from './components';
import { Button } from '../../common';

import { ADD_NEW_COURSE_BTN_TXT } from '../../constants';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Courses = ({ coursesList, authorsList }) => {
	const navigate = useNavigate();
	const [courses, setCourses] = useState(coursesList);

	const onSearchHandler = (foundCourses) => {
		if (foundCourses.length) setCourses(foundCourses);
	};

	const addNewCourseHandler = () => navigate('/courses/add');

	return (
		<>
			<Stack direction='horizontal' gap={3}>
				<SearchBar coursesList={coursesList} onSearch={onSearchHandler} />
				<div className='ms-auto'>
					<Button text={ADD_NEW_COURSE_BTN_TXT} onClick={addNewCourseHandler} />
				</div>
			</Stack>
			<CourseCardsList courses={courses} authors={authorsList} />
		</>
	);
};
export default Courses;
