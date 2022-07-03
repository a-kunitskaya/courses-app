import { CourseCard } from '../index';
import { ListGroup } from 'react-bootstrap';

const CourseCardsList = ({ courses, authors }) => (
	<ListGroup variant='flush'>
		{courses.map((course) => (
			<ListGroup.Item key={course.id}>
				<CourseCard course={course} authors={authors} />
			</ListGroup.Item>
		))}
	</ListGroup>
);

export default CourseCardsList;
