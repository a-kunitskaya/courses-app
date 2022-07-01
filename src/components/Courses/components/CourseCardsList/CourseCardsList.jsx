import { CourseCard } from '../index';

const CourseCardsList = ({ courses, authors }) => (
	<ul>
		{courses.map((course) => (
			<li key={course.id}>
				<CourseCard course={course} authors={authors} />
			</li>
		))}
	</ul>
);

export default CourseCardsList;
