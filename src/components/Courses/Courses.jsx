import CourseCard from '../Courses/components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import { ADD_NEW_COURSE_BTN_TXT } from '../../constants';
import { useState } from 'react';

const getCourseCards = ({ coursesList, authorsList }) =>
	coursesList.map((course) => {
		return (
			<li key={course.id}>
				<CourseCard course={course} authorsList={authorsList} />
			</li>
		);
	});

function Courses(props) {
	const { coursesList, authorsList } = props;
	const [courses, setCourses] = useState(coursesList);

	const onSearchHandler = (foundCourses) => {
		if (foundCourses.length) setCourses(foundCourses);
	};

	const onCreateCourseBtnClick = () => {
		console.log('createCourse clicked');
		props.onCreateCourseBtnClick(true);
	};

	return (
		<div>
			<div>
				<SearchBar
					coursesList={coursesList}
					authorsList={authorsList}
					onSearch={onSearchHandler}
				/>
				<Button
					text={ADD_NEW_COURSE_BTN_TXT}
					onClick={onCreateCourseBtnClick}
				/>
			</div>
			<ul>{getCourseCards({ coursesList: courses, authorsList })}</ul>
		</div>
	);
}
export default Courses;
