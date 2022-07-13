import { CourseCard } from '../index';
import { ListGroup } from 'react-bootstrap';

const CourseCardsList = ({ courses, authors, onDeleteCourse }) => (
	<ListGroup variant='flush'>
		{courses.map((course) => (
			<ListGroup.Item key={course.id}>
				<CourseCard
					course={course}
					authors={authors}
					onDeleteCourse={onDeleteCourse}
				/>
			</ListGroup.Item>
		))}
	</ListGroup>
);

export default CourseCardsList;
