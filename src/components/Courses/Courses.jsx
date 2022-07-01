import { useState } from 'react';

import { CourseCardsList, SearchBar } from './components';
import { Button } from '../../common';

import { ADD_NEW_COURSE_BTN_TXT } from '../../constants';

const Courses = ({ coursesList, authorsList, onCreateCourseBtnClick }) => {
	const [courses, setCourses] = useState(coursesList);

	const onSearchHandler = (foundCourses) => {
		if (foundCourses.length) setCourses(foundCourses);
	};

	const createCourseBtnHandler = () => onCreateCourseBtnClick(true);

	return (
		<div>
			<SearchBar coursesList={coursesList} onSearch={onSearchHandler} />
			<Button text={ADD_NEW_COURSE_BTN_TXT} onClick={createCourseBtnHandler} />
			<CourseCardsList courses={courses} authors={authorsList} />
		</div>
	);
};
export default Courses;
