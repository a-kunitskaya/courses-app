import { useState } from 'react';

import {
	AddAuthor,
	AddCourseDescription,
	AddCourseDuration,
	AddCourseTitle,
	AvailableAuthors,
	CourseAuthors,
} from './components';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CreateCourse = ({ authorsList }) => {
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);

	const onAddAuthorHandler = (author) =>
		setAvailableAuthors((prevState) => [author, ...prevState]);

	const onAddCourseAuthorHandler = (author) => {
		setCourseAuthors((prevState) => [author, ...prevState]);

		setAvailableAuthors((prevState) =>
			prevState.filter((item) => item.id !== author.id)
		);
	};

	const onDeleteCourseAuthorHandler = (author) => {
		setCourseAuthors((prevState) =>
			prevState.filter((item) => item.id !== author.id)
		);
		setAvailableAuthors((prevState) => [author, ...prevState]);
	};

	return (
		<Container>
			<Row className='my-3'>
				<AddCourseTitle />
			</Row>
			<Row>
				<AddCourseDescription />
			</Row>
			<Card border='border-dark'>
				<Card.Body>
					<Row>
						<Col>
							<AddAuthor onAddAuthor={onAddAuthorHandler} />
						</Col>
						<Col>
							<AvailableAuthors
								availableAuthors={availableAuthors}
								onAddCourseAuthor={onAddCourseAuthorHandler}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<AddCourseDuration />
						</Col>
						<Col>
							<CourseAuthors
								courseAuthors={courseAuthors}
								onDeleteCourseAuthor={onDeleteCourseAuthorHandler}
							/>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
};
export default CreateCourse;
