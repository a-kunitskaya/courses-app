import { Card, Col, Container, Row } from 'react-bootstrap';
import { Header } from '../index';
import {
	AUTHORS_TXT,
	CREATED_TXT,
	DURATION_TXT,
	LOCALES,
} from '../../constants';
import { formatCreationDate, getCourseDuration } from '../../helpers';
import { Link, useParams } from 'react-router-dom';

const CourseInfo = ({ courses }) => {
	const { courseId } = useParams();
	const course = courses.find(({ id }) => id === courseId);

	const { id, title, description, duration, authors, creationDate } = course;

	const cardItems = [
		{ label: 'ID', value: id },
		{
			label: AUTHORS_TXT,
			value: authors.join(', '),
		},
		{
			label: DURATION_TXT,
			value: getCourseDuration(duration),
		},
		{
			label: CREATED_TXT,
			value: formatCreationDate(creationDate, LOCALES.pl),
		},
	];
	return (
		<div>
			<Header />
			<Container className='border border-primary p-5'>
				<Link to='/courses' className='text-decoration-none link-dark'>
					{'< Back to courses'}
				</Link>
				<Row>
					<Col className='text-center'>
						<h1 className='mb-5'>{title}</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>{description}</p>
					</Col>
					<Col>
						{cardItems.map(({ label, value }) => {
							return (
								<Card.Text key={label}>
									<span className='fw-bold'>{label}</span>: {value}
								</Card.Text>
							);
						})}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CourseInfo;
