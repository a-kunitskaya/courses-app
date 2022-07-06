import { Card, Col, Container, Row } from 'react-bootstrap';
import { Header } from '../index';
import {
	AUTHORS_TXT,
	CREATED_TXT,
	DURATION_TXT,
	LOCALES,
} from '../../constants';
import {
	formatCreationDate,
	getCourseAuthor,
	getCourseDuration,
} from '../../helpers';

const CourseInfo = () => {
	const course = {
		id: '12142342',
		title: 'Java Script',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		duration: 123,
		authors: ['author1, author2'],
		creationDate: '12/12/2012',
	};

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
				<a href='#'>{'< Back to courses'}</a>
				<Row>
					<Col className='text-center'>
						<h1>{title}</h1>
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
