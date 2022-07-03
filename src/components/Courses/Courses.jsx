import { useState } from 'react';

import { CourseCardsList, SearchBar } from './components';
import { Button } from '../../common';

import { ADD_NEW_COURSE_BTN_TXT } from '../../constants';
import { Container, Stack } from 'react-bootstrap';

const Courses = ({ coursesList, authorsList, onCreateCourseBtnClick }) => {
	const [courses, setCourses] = useState(coursesList);

	const onSearchHandler = (foundCourses) => {
		if (foundCourses.length) setCourses(foundCourses);
	};

	const createCourseBtnHandler = () => onCreateCourseBtnClick(true);

	return (
		<Container className='border border-primary'>
			<Stack direction='horizontal' gap={3}>
				<SearchBar coursesList={coursesList} onSearch={onSearchHandler} />
				<div className='ms-auto'>
					<Button
						text={ADD_NEW_COURSE_BTN_TXT}
						onClick={createCourseBtnHandler}
					/>
				</div>
			</Stack>
			<CourseCardsList courses={courses} authors={authorsList} />
		</Container>
	);
};
export default Courses;
