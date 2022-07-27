import { useEffect, useState } from 'react';

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
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAuthorsAction } from '../../store/authors/reducer';
import { addAuthor } from '../../services';
import { getToken } from '../../helpers';

const CourseForm = ({ onCourseAdd, onCourseUpdate }) => {
	const dispatch = useDispatch();
	const { courseId } = useParams();

	const [courseAuthors, setCourseAuthors] = useState([]);
	const allAuthors = useSelector((state) => state.authors);
	const [availableAuthors, setAvailableAuthors] = useState(allAuthors);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	const courses = useSelector((state) => state.courses);

	useEffect(() => {
		if (!courseId) return;

		const course = courses.find((course) => course.id === courseId);
		setTitle(course.title);
		setDescription(course.description);
		const crsAuthors = course.authors.map((courseAuthor) =>
			allAuthors.find((a) => a.id === courseAuthor)
		);
		setCourseAuthors(crsAuthors);
		setDuration(course.duration);
		const restOfAuthors = availableAuthors.filter(
			(author) => !course.authors.find((id) => id === author.id)
		);
		setAvailableAuthors(restOfAuthors);
	}, [courseId, courses, availableAuthors]);

	const navigate = useNavigate();

	const onAddAuthorHandler = async (author) => {
		const token = getToken();
		if (token) {
			const {
				data: { result },
			} = await addAuthor(author, token);
			dispatch(addAuthorsAction(result));
			setAvailableAuthors((prevState) => [author, ...prevState]);
		}
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
	const onAddDurationHandler = (duration) => setDuration(Number(duration));
	const onCreateUpdateCourseHandler = (event) => {
		event.preventDefault();
		const newCourse = {
			title,
			description,
			creationDate: new Date().toString(),
			duration,
			authors: courseAuthors.map((author) => author.id),
		};
		if (courseId) {
			onCourseUpdate(courseId, newCourse);
		} else {
			onCourseAdd(newCourse);
		}
		navigate('/courses');
	};

	return (
		<div>
			<Header />
			<Container className='border border-primary'>
				<Row className='my-3'>
					<AddCourseTitle
						onAddTitle={onAddTitleHandler}
						onCreateUpdateCourse={onCreateUpdateCourseHandler}
						courseId={courseId}
						title={title}
					/>
				</Row>
				<Row>
					<AddCourseDescription
						onAddDescription={onAddDescriptionHandler}
						description={description}
					/>
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
								<AddCourseDuration
									onAddDuration={onAddDurationHandler}
									duration={duration}
								/>
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
export default CourseForm;
