import CourseCard from '../Courses/components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../helpers/getMockedData';

const courseCards = mockedCoursesList.map((course) => {
	console.log(course);
	return (
		<li>
			<CourseCard course={course} />
		</li>
	);
});

function Courses() {
	return (
		<div>
			<ul>{courseCards}</ul>
		</div>
	);
}
export default Courses;
