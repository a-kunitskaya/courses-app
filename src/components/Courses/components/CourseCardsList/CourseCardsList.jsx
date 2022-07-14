import { CourseCard } from '../index';
import { ListGroup } from 'react-bootstrap';

const CourseCardsList = ({ courses }) => {
	return (
		<ListGroup variant='flush'>
			{courses.map((course) => (
				<ListGroup.Item key={course.id}>
					<CourseCard course={course} />
				</ListGroup.Item>
			))}
		</ListGroup>
	);
};

export default CourseCardsList;
