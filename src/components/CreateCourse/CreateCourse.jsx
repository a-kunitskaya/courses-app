import { useState } from 'react';
import { v1 as uuid } from 'uuid';

import {
	AddAuthor,
	AddCourseDescription,
	AddCourseDuration,
	AddCourseTitle,
	AvailableAuthors,
	CourseAuthors,
} from './components';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Header } from '../index';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAuthorsAction } from '../../store/authors/reducer';

const CreateCourse = ({ onCourseAdd }) => {
	const dispatch = useDispatch();
	const [courseAuthors, setCourseAuthors] = useState([]);
	const allAuthors = useSelector((state) => state.authors);
	const [availableAuthors, setAvailableAuthors] = useState(allAuthors);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const navigate = useNavigate();

	const onAddAuthorHandler = (author) => {
		dispatch(addAuthorsAction(author));
		setAvailableAuthors((prevState) => [author, ...prevState]);
	};

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

	const onAddTitleHandler = (title) => setTitle(title);
	const onAddDescriptionHandler = (description) => setDescription(description);
	const onAddDurationHandler = (duration) => setDuration(duration);
	const onCreateCourseHandler = (event) => {
		event.preventDefault();
		const newCourse = {
			id: uuid(),
			title,
			description,
			creationDate: new Date().toString(),
			duration,
			authors: courseAuthors.map((author) => author.id),
		};
		console.log('new course', newCourse);
		onCourseAdd(newCourse);
		navigate('/courses');
	};

	return (
		<div>
			<Header />
			<Container className='border border-primary'>
				<Row className='my-3'>
					<AddCourseTitle
						onAddTitle={onAddTitleHandler}
						onCreateCourse={onCreateCourseHandler}
					/>
				</Row>
				<Row>
					<AddCourseDescription onAddDescription={onAddDescriptionHandler} />
				</Row>
				<Card border='border border-dark mb-5'>
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
								<AddCourseDuration onAddDuration={onAddDurationHandler} />
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
		</div>
	);
};
export default CreateCourse;
