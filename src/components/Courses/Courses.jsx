import CourseCard from '../Courses/components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import { ADD_NEW_COURSE_BTN_TXT } from '../../constants';

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
	return (
		<div>
			<div>
				<SearchBar coursesList={coursesList} authorsList={authorsList} />
				<Button text={ADD_NEW_COURSE_BTN_TXT} onClick={() => {}} />
			</div>
			<ul>{getCourseCards({ coursesList, authorsList })}</ul>
		</div>
	);
}
export default Courses;
