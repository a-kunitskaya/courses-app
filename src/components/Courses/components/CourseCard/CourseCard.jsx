import { Button } from '../../../../common';

import {
	AUTHORS_TXT,
	CREATED_TXT,
	DURATION_TXT,
	LOCALES,
	SHOW_COURSE_BTN_TXT,
} from '../../../../constants';

import {
	formatCreationDate,
	getCourseAuthor,
	getCourseDuration,
} from '../../../../helpers';
import { Card, Col, Row } from 'react-bootstrap';

const CourseCard = ({ course, authors }) => {
	const { title, description, duration, creationDate } = course;

	const cardItems = [
		{
			label: AUTHORS_TXT,
			value: getCourseAuthor({ course, authors }).join(', '),
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
		<Card border='success' className='my-4'>
			<Card.Body>
				<Row>
					<Col>
						<Card.Title className='display-6 fw-bold'>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
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
			</Card.Body>
		</Card>
	);
};

export default CourseCard;
