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
import { Header } from '../index';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CreateCourse = ({ authorsList }) => {
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');
	const { t } = useTranslation();

	const navigate = useNavigate();

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

	const onAddTitleHandler = (title) => setTitle(title);
	const onAddDescriptionHandler = (description) => setDescription(description);
	const onAddDurationHandler = (duration) => setDuration(duration);
	const onCreateCourseHandler = (event) => {
		event.preventDefault();
		const newCourse = {
			id: Math.random(),
			title,
			description,
			creationDate: new Date(),
			duration,
			authors: courseAuthors,
		};

		//Uladzislau, I need your advice on what's the right way to pass this new course to /courses:
		// I was not able to come up with a solution on how to pass this new course object to AND save all the courses added previously
		// the options I tried (and they did not work properly, the courses added previously were lost):
		// 1) pass as a state in navigate()
		// 2) save in localStorage
		// 3) lift it up by passing through props
		console.log('new course:', newCourse);
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
